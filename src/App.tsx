import { useState } from "react";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import { lightTheme, darkTheme } from "./components/themes";
import "./App.css";
import { ThemeProvider } from "styled-components";
import messagesFromReactAppListener from "./chromeServices/DOMEvaluator";
import Settings from "./components/settings";
import Loading from "./components/loading";

function App() {
  const [isStarted, setStarted] = useState(false);
  const [isFocusMode, setFocusMode] = useState(false);
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [shouldSummarize, setShouldSummarize] = useState(true);
  const [isSettings, setIsSettings] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState("medium");
  const [sentences, setSentences] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  chrome.storage.local.get("darkMode").then((result) => {
    if (typeof result["darkMode"] !== "undefined") {
      setDarkMode(result["darkMode"][0]);
    } else {
      chrome.storage.local.set({
        darkMode: [isDarkMode],
      });
    }
  });

  chrome.storage.local.get("focusMode").then((result) => {
    if (typeof result["focusMode"] !== "undefined") {
      setFocusMode(result["focusMode"][0]);
    } else {
      chrome.storage.local.set({
        focusMode: [isFocusMode],
      });
    }
  });

  let url = "";

  getCurrentTab().then((tab) => {
    url = tab.url as string;
    let key = `${url} isStarted`;
    chrome.storage.local.get([key]).then((result) => {
      if (result[key][0]) {
        setStarted(true);
      }
    });
  });

  const handleChangeSentences = (e: any) => {
    setSentences(+e.target.value);
    setShouldSummarize(true);
    setIsLoading(true);
  };

  const handleChangeSize = (e: any) => {
    console.log(("changed size to " + e.target.value) as string);
    setSize(e.target.value as string);
    setShouldSummarize(true);
    setIsLoading(true);
  };

  const handleClickSettings = () => {
    setIsSettings(!isSettings);
  };

  const handleClickDarkMode = () => {
    chrome.storage.local.set({
      darkMode: [!isDarkMode],
    });
    setDarkMode(!isDarkMode);
  };

  const handleClickFocusMode = () => {
    console.log("clicked focus mode");
    chrome.storage.local.set({
      focusMode: [!isFocusMode],
    });
    setFocusMode(!isFocusMode);
  };

  const handleClickStart = () => {
    setStarted(true);
    chrome.storage.local.set({
      [`${url} isStarted`]: [true],
    });
  };

  const fontSize = (size: string) => {
    switch (size) {
      case "small":
        return 12;
      case "medium":
        return 14;
      case "large":
        return 16;
      case "extra-large":
        return 18;
      default:
        return 10;
    }
  };

  const callSummarize = () => {
    getCurrentTab().then((tab) => {
      url = tab.url as string;
      let key = `${url} ${sentences}`;
      chrome.storage.local.get([key]).then((result) => {
        if (
          typeof result[key] !== "undefined" &&
          parseInt(result[key][1], 10) === sentences
        ) {
          setTitle(result[key][0].sm_api_title);
          setSummary(result[key][0].sm_api_content);
          setIsLoading(false);
        } else {
          messagesFromReactAppListener(url, sentences)
            .then((response: any) => {
              const title = response.summary.data.sm_api_title;
              const summary = response.summary.data.sm_api_content;
              setTitle(title);
              setSummary(summary);
              chrome.storage.local.set({
                [key]: [response.summary.data, sentences],
              });
            })
            .then(() => {
              setIsLoading(false);
            });
        }
      });
    });
    setShouldSummarize(false);
  };

  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  if (shouldSummarize) {
    callSummarize();
  }

  let contentComponent: JSX.Element;
  if (isSettings) {
    contentComponent = (
      <Settings
        size={size}
        onChangeSize={handleChangeSize}
        onChangeTheme={handleClickDarkMode}
        onChangeMode={handleClickFocusMode}
        isDarkMode={isDarkMode}
        isFocusMode={isFocusMode}
      />
    );
  } else if (isLoading) {
    contentComponent = <Loading />;
  } else {
    contentComponent = (
      <Content
        title={title}
        body={summary}
        fontSize={fontSize(size)}
        isStarted={isStarted}
        onClick={handleClickStart}
      />
    );
  }

  return (
    <div className="full">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header
          title={isSettings ? "settings" : "tl;dr"}
          isDark={isDarkMode}
          isSettings={isSettings}
          settingsClicked={handleClickSettings}
          darkModeClicked={handleClickDarkMode}
        />
        {contentComponent}
        <Footer
          sentences={sentences}
          onChangeValue={handleChangeSentences}
          shouldDisplay={isSettings || isLoading}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;

import { useState } from "react";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import { lightTheme, darkTheme } from "./components/themes";
import "./app.css";
import { ThemeProvider } from "styled-components";
import messagesFromReactAppListener from "./chromeServices/DOMEvaluator";
import Settings from "./components/settings";
import Loading from "./components/loading";

function App() {
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [shouldSummarize, setShouldSummarize] = useState(true);
  const [isSettings, setIsSettings] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState("medium");
  const [sentences, setSentences] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  chrome.storage.local.get("darkMode").then((result) => {
    console.log(result);
    if (typeof result["darkMode"] !== "undefined") {
      setDarkMode(result["darkMode"][0]);
    } else {
      chrome.storage.local.set({
        darkMode: [isDarkMode],
      });
    }
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
      let url = tab.url as string;
      let key = `${url} ${sentences}`;
      chrome.storage.local.get([key]).then((result) => {
        if (
          typeof result[key] !== "undefined" &&
          parseInt(result[key][1], 10) === sentences
        ) {
          //console.log("local storage!");
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
        onChangeMode={handleClickDarkMode}
        isDarkMode={isDarkMode}
      />
    );
  } else if (isLoading) {
    contentComponent = <Loading />;
  } else {
    contentComponent = (
      <Content title={title} body={summary} fontSize={fontSize(size)} />
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

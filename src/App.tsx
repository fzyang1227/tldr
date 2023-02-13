import { useState } from "react";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import { lightTheme, darkTheme } from "./components/themes";
import "./app.css";
import { ThemeProvider } from "styled-components";
import messagesFromReactAppListener from "./chromeServices/DOMEvaluator";
import Settings from "./components/settings";

function App() {
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [shouldSummarize, setShouldSummarize] = useState(true);
  const [isSettings, setIsSettings] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState("medium");
  const [sentences, setSentences] = useState(4);

  const handleChange = (e: any) => {
    setSentences(e.target.value);
    setSize(e.target.value);
    setShouldSummarize(true);
    callSummarize();
  };

  const handleClickSettings = () => {
    setIsSettings(!isSettings);
  };

  const handleClickDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  // const handleChangeSize = (e: any) => {
  //   setSize(e.target.value);
  //   setShouldSummarize(false);
  //   callSummarize();
  // };

  const callSummarize = () => {
    getCurrentTab().then((tab) => {
      let url = tab.url as string;
      chrome.storage.local.get([url]).then((result) => {
        if (
          typeof result[url] !== "undefined" &&
          result[url][1] === sentences
        ) {
          console.log("local storage!");
          setTitle(result[url][0].sm_api_title);
          setSummary(result[url][0].sm_api_content);
        } else {
          messagesFromReactAppListener(url, sentences).then((response: any) => {
            const title = response.summary.data.sm_api_title;
            const summary = response.summary.data.sm_api_content;
            setTitle(title);
            setSummary(summary);
            chrome.storage.local.set({
              [url]: [response.summary.data, sentences],
            });
          });
        }
      });
    });
    setShouldSummarize(false);
  };

  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    // tab will either be a tabs.Tab instance or undefined.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
  }

  if (shouldSummarize) {
    callSummarize();
  }

  console.log(isSettings);
  const contentComponent = !isSettings ? (
    <Content title={title} body={summary} fontSize={size} />
  ) : (
    <Settings size={size} onChangeValue={handleChange} />
  );
  console.log(isSettings);

  return (
    <div className="full">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header
          title="tl;dr"
          isDark={isDarkMode}
          isSettings={isSettings}
          settingsClicked={handleClickSettings}
          darkModeClicked={handleClickDarkMode}
        />
        {contentComponent}
        <Footer
          sentences={sentences}
          onChangeValue={handleChange}
          isSettings={isSettings}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;

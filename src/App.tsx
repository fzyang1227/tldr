import React, { useState } from "react";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import { lightTheme, darkTheme } from "./components/themes";
import "./app.css";
import { ThemeProvider } from "styled-components";
import messagesFromReactAppListener from "./chromeServices/DOMEvaluator";

function App() {
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [shouldSummarize, setShouldSummarize] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState("medium");
  const [sentences, setSentences] = useState(7);

  const handleChangeSize = (e: any) => {
    setSize(e.target.value);
    callSummarize();
  };

  const callSummarize = () => {
    getCurrentTab().then((tab) => {
      let url = tab.url as string;

      chrome.storage.local.get([url]).then((result) => {
        console.log(result);
        console.log(result[url]);
        if (typeof result[url] !== "undefined") {
          console.log("local storage!");
          setTitle(result[url].sm_api_title);
          setSummary(result[url].sm_api_content);
        } else {
          messagesFromReactAppListener(url).then((response: any) => {
            const title = response.summary.data.sm_api_title;
            const summary = response.summary.data.sm_api_content;
            setTitle(title);
            setSummary(summary);
            chrome.storage.local.set({ [url]: response.summary.data });
          });
        }
      });
    });
    setShouldSummarize(true);
  };

  let [tab]: chrome.tabs.Tab[] = [];
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // tab will either be a tabs.Tab instance or undefined.
    [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  if (!shouldSummarize) {
    callSummarize();
  }

  return (
    <div className="full">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header
          title="tl;dr"
          isDark={isDarkMode}
          rightIcon="fas fa-gear fa-1x"
        />
        <Content title={title} body={summary} />
        <Footer sentences={sentences} onChangeValue={handleChangeSize} />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useState }from "react";
import "./App.css"; 
import messagesFromReactAppListener from "./chromeServices/DOMEvaluator";

function App() {

  const [currUrl, setCurrUrl] = useState("");
  const [summary, setSummary] = useState("");

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  getCurrentTab().then((tab) => {
    setCurrUrl(tab.url as string)
  });

  // chrome.runtime.sendMessage(
  //   {greeting: 'helo'}
  // );

  messagesFromReactAppListener(currUrl).then((response: any) => {
    console.log('ah');
    console.log(response);
    setSummary(response.summary.data.sm_api_content)
  });

  return (
    <div className="App">
      <header className="App-header">
        {summary}
      </header>
    </div>
  );
}

export default App;

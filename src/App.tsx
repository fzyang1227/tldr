import React, { useState }from "react";
import "./App.css"; 

function App() {

  const [currUrl, setCurrUrl] = useState("");

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  getCurrentTab().then((tab) => {
    setCurrUrl(tab.url as string)
  });


  return (
    <div className="App">
      <header className="App-header">
        {currUrl}
      </header>
    </div>
  );
}

export default App;

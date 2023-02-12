import logo from "./logo.svg";
import "./App.css";
import { DOMMessage, DOMMessageResponse } from "./types";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            DOMMessage.GET_ACTIVE_TAB_HTML,
            (response: DOMMessageResponse) => {
              setText(response.summary);
            }
          );
        }
      );
  });

  //  chrome.tabs.query({active: true, currentWindow: true}).then((data) => data.)

  return (
    <div className="App">
      <h1>{text}</h1>

      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">peepee poopoo butt</span>
            <span className="SEOValidationFieldStatus Error">{text}</span>
          </div>
          <div className="SEOVAlidationFieldValue">The title of the page</div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Main Heading</span>
            <span className="SEOValidationFieldStatus Ok">1</span>
          </div>
          <div className="SEOVAlidationFieldValue">
            The main headline of the page (H1)
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;

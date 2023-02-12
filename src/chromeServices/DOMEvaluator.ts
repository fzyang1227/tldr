import { DOMMessage, DOMMessageResponse } from "../types";

const smmry = require("smmry")({
  SM_API_KEY: "2CD97EA006",
  SM_WITH_BREAK: true,
});

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  smmry
    .summarizeURL(sender.url, {
      SM_LENGTH: 5,
    })
    .then((data) => {
      console.log(data);
    });

  console.log("[content.js]. Message received", msg);

  const headlines = Array.from(document.getElementsByTagName<"h1">("h1")).map(
    (h1) => h1.innerText
  );

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    title: document.title,
    headlines,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

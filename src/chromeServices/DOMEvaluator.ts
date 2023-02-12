import { DOMMessage, DOMMessageResponse } from "../types";

const smmry = require("smmry")({
  SM_API_KEY: "2CD97EA006",
  SM_WITH_BREAK: true,
});

let summary = "";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log(sender.url);
  smmry
    .summarizeURL(sender.url, {
      SM_LENGTH: 5,
    })
    .then((data: string) => {
      summary = data;
      console.log(data);
      const response: DOMMessageResponse = {
        summary: summary,
      };

      sendResponse(response);
    });

  console.log("[content.js]. Message received", msg);

  // Prepare the response object with information about the site
  // const response: DOMMessageResponse = {
  //   summary: summary,
  // };

  // sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

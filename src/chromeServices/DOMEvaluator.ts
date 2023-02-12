import { DOMMessage, DOMMessageResponse } from "../types";
// @ts-ignore
import * as smmry from "smmry";

let summary = "";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  console.log("[content.js]. Message received", msg);

  smmry.summarizeURL(sender.url, {
    SM_LENGTH: 5,
  });

  // Prepare the response object with information about the site
  const response: DOMMessageResponse = {
    summary: "",
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

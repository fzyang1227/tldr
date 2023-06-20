import { DOMMessageResponse } from "../types";
//@ts-ignore
import axios from "axios";
//@ts-ignore
import * as assignIn from "lodash.assignin";

let summary = "";

const API_URL = "https://api.smmry.com";
const api_keys = [
  "FCFD97EE01",
  "2CD97EA006",
  "CBDA4340AB",
  "B4F0F3F0E6",
  "FC3F20C27A",
];

const buildQuery = (query: any) =>
  Object.keys(query).reduce((acc, val) => {
    if (!query[val]) return acc;
    return `${acc}${(acc && "&") || "?"}${val}=${query[val]}`;
  }, "");

const defaultOptions = {
  //SM_API_KEY: "FCFD97EE01",
  SM_LENGTH: undefined,
  SM_KEYWORD_COUNT: undefined,
  SM_WITH_BREAK: undefined,
  SM_WITH_ENCODE: undefined,
  SM_IGNORE_LENGTH: undefined,
  SM_QUOTE_AVOID: undefined,
  SM_QUESTION_AVOID: undefined,
  SM_EXCLAMATION_AVOID: undefined,
};

// Function called when a new message is received
const messagesFromReactAppListener = (url: string, sentences: number) => {
  // randomly select a key from the list of keys
  const key = api_keys[Math.round(Math.random() * api_keys.length)];
  const opts = assignIn(defaultOptions); //options is another param i took out

  const query = buildQuery(
    assignIn(
      { SM_API_KEY: key },
      opts,
      {
        SM_LENGTH: sentences,
      },
      { SM_URL: url }
    )
  );
  const rpOpts = {
    method: "GET",
    url: `${API_URL}${query}`,
  };
  return axios.request(rpOpts).then((data: any) => {
    console.log("key used: " + key);
    summary = data;
    const response: DOMMessageResponse = {
      summary: summary,
    };
    return response;
  });
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

export default messagesFromReactAppListener;

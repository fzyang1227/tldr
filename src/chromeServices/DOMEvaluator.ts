import { DOMMessage, DOMMessageResponse } from "../types";
// @ts-ignore
import * as smmry from "smmry"; 
//@ts-ignore
import * as rp from "require-promise";
//@ts-ignore
import axios from 'axios';
//@ts-ignore
import * as assignIn from "lodash.assignin";

let summary = "";

const API_URL = 'https://api.smmry.com';


const buildQuery = (query: any) => Object.keys(query)
        .reduce((acc, val) => {
          if (!query[val]) return acc;
          return (`${acc}${((acc && '&') || '?')}${val}=${query[val]}`);
        }, '');

const defaultOptions = {
  SM_API_KEY: '2CD97EA006',
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
const messagesFromReactAppListener = (url: string
) => {
  const opts = assignIn(defaultOptions); //options is another param i took out

  const query = buildQuery(assignIn(opts, {
    SM_LENGTH: 4,
  }, { SM_URL: encodeURIComponent(url) }));
  const rpOpts = {
    method: 'GET',
    url: `${API_URL}${query}`,
  };
  return axios.request(rpOpts).then((data: any) => {
    summary = data;
    const response: DOMMessageResponse = {
      summary: summary,
    }

    // console.log(response);


    return response;
  });

};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);

export default messagesFromReactAppListener;
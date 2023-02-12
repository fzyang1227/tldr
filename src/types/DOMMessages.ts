export enum DOMMessage {
  GET_HTML_ACTIVE_TAB = "get-html-active-tab",
  SMMRY_FETCH_RESPONSE = "smmry-fetch-response",
  CS_CHANGE_MODE = "cs-change-mode",
  CS_CHANGE_FONT = "cs-change-font",
}

export type DOMMessageResponse = {
  title: string;
  headlines: string[];
};

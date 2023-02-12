export enum DOMMessage {
  GET_ACTIVE_TAB_HTML = "get-active-tab-html",
  SMMRY_FETCH_RESPONSE = "smmry-fetch-response",
  CS_CHANGE_MODE = "cs-change-mode",
  CS_CHANGE_FONT = "cs-change-font",
}

export type DOMMessageResponse = {
  summary: string;
};

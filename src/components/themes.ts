import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    headSelColor: string;
    bodyColor: string;
    boxColor: string;
    primaryText: string;
  }
}

export const lightTheme: DefaultTheme = {
  headSelColor: "#EDCEA9",
  bodyColor: "#FAEAD7",
  boxColor: "#EDCEA980",
  primaryText: "#072450",
};

export const darkTheme: DefaultTheme = {
  headSelColor: "#7185A3",
  bodyColor: "#072450",
  boxColor: "#7185A350",
  primaryText: "#F8EDD3",
};

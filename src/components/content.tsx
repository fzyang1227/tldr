import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import "./content.css";
import StartButton from "./startButton";

const Content = (props: {
  title: string;
  body: string;
  isFocusMode: boolean;
  fontSize: number;
  isStarted: boolean;
  onClick: (e: any) => void;
}) => {
  const theme = useContext(ThemeContext);

  const All = styled.div`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    flex: 0 1 auto;
    min-height: 390px;
    max-height: 390px;
    overflow-y: scroll;
    font-size: ${props.fontSize}px;
  `;

  // focus mode logic, bold first 2 letters of each word
  let text = props.body;
  if (props.isFocusMode) {
    text = text
      .split(" ")
      .map((word) => {
        word = word.substring(0, 2) + "</b>" + word.substring(2);
        return "<b>" + word;
      })
      .join(" ");
  }

  // const parser = new DOMParser();
  // const html = parser.parseFromString(text, "text/html");
  // const body = html.body;

  const body = document.createElement("div");
  body.innerHTML = text;

  return (
    <All className="container">
      {props.isStarted ? (
        <>
          <div className="px-1 content-wrap">
            <h1>{props.title}</h1>
          </div>
          <div
            ref={(ref) => ref?.appendChild(body)}
            className="px-1 content-wrap"
          ></div>
        </>
      ) : (
        <div style={{ position: "relative", top: 150, left: 70, width: 200 }}>
          <StartButton onClick={props.onClick} />
        </div>
      )}
    </All>
  );
};

export default Content;

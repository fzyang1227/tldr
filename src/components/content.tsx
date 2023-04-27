import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import "./content.css";
import StartButton from "./startButton";

const Content = (props: {
  title: string;
  body: string;
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

  return (
    <All className="container">
      {props.isStarted ? (
        <>
          <div className="px-1 content-wrap">
            <h1>{props.title}</h1>
          </div>
          <div className="px-1 content-wrap">{props.body}</div>
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

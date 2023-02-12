import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import "./content.css";

const Content = (props: { title: string; body: string }) => {
  const theme = useContext(ThemeContext);

  const All = styled.div`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    flex: 0 1 auto;
    min-height: 390px;
    max-height: 390px;
    overflow: scroll;
  `;

  return (
    <All className="container">
      <div className="px-1 content-wrap">
        <h1>{props.title}</h1>
      </div>
      <div className="px-1 content-wrap">{props.body}</div>
    </All>
  );
};

export default Content;

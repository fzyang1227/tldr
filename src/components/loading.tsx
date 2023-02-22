import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import "./content.css";
import PulseLoader from "../assets/pulseLoader";

const Loading = () => {
  const theme = useContext(ThemeContext);

  const All = styled.div`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    flex: 0 1 auto;
    min-height: 390px;
    max-height: 390px;
    overflow: scroll;
    text-align: center;
    padding: 165px 0;
  `;

  return (
    <All className="container">
      <PulseLoader color={theme.primaryText} />
    </All>
  );
};

export default Loading;

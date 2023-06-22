import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import "./startButton.css";

const StartButton = (props: { onClick: (e: any) => void }) => {
  const theme = useContext(ThemeContext);

  const Button = styled.button`
    color: ${theme.primaryText};
    background-color: ${theme.headSelColor};
    text-align: center;
  `;

  return (
    <Button onClick={props.onClick} className="btn rounded-pill to-start">
      tl;dr it!
    </Button>
  );
};

export default StartButton;

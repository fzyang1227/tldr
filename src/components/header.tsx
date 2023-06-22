import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import logoLight from "../assets/logo-dark.png";
import logoDark from "../assets/logo-light.png";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";

const Header = (props: {
  title: String;
  isDark: boolean;
  isSettings: boolean;
  settingsClicked: () => void;
  darkModeClicked: () => void;
}) => {
  const theme = useContext(ThemeContext);
  const All = styled.header`
    color: ${theme.primaryText};
    background-color: ${theme.headSelColor};
    font-weight: 600;
    font-size: 24px;
    fontfamily: "Inter";
    height: 50px;
  `;

  const rightIcon = !props.isSettings ? (
    <SettingsIcon style={{ color: theme.primaryText }} />
  ) : (
    <KeyboardBackspaceIcon style={{ color: theme.primaryText }} />
  );

  return (
    <All className="px-2 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center justify-content-center">
          <div className="d-flex justify-content-between align-items-center justify-content-center">
            <span className="position-relative align-items-center">
              {props.isDark ? (
                <img src={logoDark} alt="tl;dr"></img>
              ) : (
                <img src={logoLight} alt="tl;dr"></img>
              )}
            </span>
            <div className="p-2 logo-title">{props.title}</div>
          </div>
          <div style={{ paddingLeft: 20 }} className="text-end align-middle">
            <Button onClick={props.settingsClicked}>{rightIcon}</Button>
          </div>
        </div>
      </div>
    </All>
  );
};

export default Header;

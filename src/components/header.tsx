import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import logoLight from '../assets/logo-dark.png';
import logoDark from '../assets/logo-light.png';

const Header = (props: {title: String, isDark: boolean, rightIcon: string}) => {
    const theme = useContext(ThemeContext);
    const All = styled.header`
      color: ${theme.primaryText};
      background-color: ${theme.headSelColor};
      font-weight: 600;
      font-size: 24px;
    `
    const Right = styled.i`
      color: ${theme.primaryText};
    `

    return (
    <All className="px-2 sticky-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center justify-content-center">
          <div className="d-flex justify-content-between align-items-center justify-content-center">
            <span className="position-relative align-items-center">
              {props.isDark ? <img src={logoDark} alt="tl;dr"></img> : <img src={logoLight} alt="tl;dr"></img>}
            </span>
            <div className="p-2 logo-title">{props.title}</div>
          </div>
          <div className="text-end align-middle">
          <a href="settings.tsx">
            <Right className={props.rightIcon}></Right>
            </a>
          </div>
        </div>
      </div>
    </All>
)};

export default Header;

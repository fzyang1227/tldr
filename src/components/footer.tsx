import { useContext } from "react";
import { ThemeContext } from "styled-components";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const Footer = (props: {
  sentences: number;
  onChangeValue: (e: any) => void;
  shouldDisplay: boolean;
}) => {
  const theme = useContext(ThemeContext);

  const All = styled.footer`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    font-weight: 300;
    font-size: 10px;
    height: 65px;
    text-align: center;
  `;

  const inputProps = {
    shrink: true,
    style: {
      color: theme.primaryText,
    },
    min: 4,
    max: 12,
  };

  const Bot = styled.div`
    font-size: 15px;
  `;

  const footerComponent = !props.shouldDisplay ? (
    <Bot>
      <div className="px-1 container">
        <form>
          <div className="pt-2 row justify-between">
            <label htmlFor="sentences" className="col-8 col-form-label">
              Summarize article # sentences:
            </label>
            <div className="col-3">
              <TextField
                id="outlined-number"
                type="number"
                inputProps={inputProps}
                value={props.sentences}
                onChange={props.onChangeValue}
                size="small"
              />
            </div>
          </div>
        </form>
      </div>
    </Bot>
  ) : (
    <Bot></Bot>
  );

  return (
    <All className="px-2 sticky-bottom align-center">
      {footerComponent}
      Powered by Summry
    </All>
  );
};

export default Footer;

import { useContext } from "react";
import { ThemeContext } from "styled-components";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const Footer = (props: {
  sentences: number;
  onChangeValue: (e: any) => void;
}) => {
  const theme = useContext(ThemeContext);

  const All = styled.footer`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    font-weight: 300;
    font-size: 10px;
    height: 60px;
    text-align: center;
  `;
  const Input = styled.input`
    color: ${theme.primaryText};
    background-color: ${theme.bodyColor};
    border: 1px solid ${theme.primaryText};
    padding: 2px;
    &:focus {
      background-color: ${theme.bodyColor};
      color: ${theme.primaryText};
    }
  `;

  const inputProps = {
    shrink: true,
    style: {
      color: theme.primaryText,
    },
  };

  const Bot = styled.div`
    font-size: 15px;
  `;

  return (
    <All className="px-2 sticky-bottom align-center">
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
      Powered by Summry
    </All>
  );
};

export default Footer;

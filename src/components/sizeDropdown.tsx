import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SizeDropdown = (props: {
  size: string;
  onChangeValue: (e: any) => void;
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Select
      sx={{
        width: 165,
        height: 40,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: theme.boxColor,
        color: theme.primaryText,
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
      value={props.size}
      defaultValue="medium"
      onChange={props.onChangeValue}
      IconComponent={(props) => (
        <KeyboardArrowDownIcon
          style={{ color: theme.primaryText }}
          fontSize="large"
          {...props}
        />
      )}
    >
      <MenuItem value={"small"}>small</MenuItem>
      <MenuItem value={"medium"}>medium</MenuItem>
      <MenuItem value={"large"}>large</MenuItem>
      <MenuItem value={"extra-large"}>extra-large</MenuItem>
    </Select>
  );
};

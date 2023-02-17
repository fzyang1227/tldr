import { FormControl, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Settings = (props: { size: string; onChangeValue: (e: any) => void }) => {
  const theme = useContext(ThemeContext);

  return (
    <FormControl>
      <Select
        sx={{
          width: 130,
          height: 50,
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: theme.bodyColor,
          color: theme.primaryText,
          boxShadow: "none",
        }}
        value={props.size}
        defaultValue="medium"
        onChange={props.onChangeValue}
        IconComponent={(props) => (
          <KeyboardArrowDownIcon
            style={{ color: theme.primaryText }}
            {...props}
          />
        )}
      >
        <MenuItem value={"small"}>small</MenuItem>
        <MenuItem value={"medium"}>medium</MenuItem>
        <MenuItem value={"large"}>large</MenuItem>
        <MenuItem value={"extra-large"}>extra-large</MenuItem>
      </Select>
    </FormControl>
  );
};
export default Settings;

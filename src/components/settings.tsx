import { MenuItem, Select } from "@mui/material";

const Settings = (props: { size: string; onChangeValue: (e: any) => void }) => (
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={props.size}
    label="Age"
    onChange={props.onChangeValue}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
);
export default Settings;

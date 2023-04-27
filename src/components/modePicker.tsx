import { styled, Switch } from "@mui/material";

export const ModePicker = styled(Switch)((props: { isFocusMode: boolean }) => ({
  root: {
    width: 80,
    height: 48,
    padding: 8,
  },
  switchBase: {
    padding: 11,
    color: "#ff6a00",
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
  },
  track: {
    background: props.isFocusMode ? "linear-gradient(to right, #ee0979, #ff6a00)" : "linear-gradient(to right, #43cea2, #185a9d)",
    opacity: "1 !important",
    borderRadius: 20,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
    },
    "&:before": {
      content: '"on"',
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"off"',
      right: 4,
    },
  },
  checked: {
    "&$switchBase": {
      color: "#185a9d",
      transform: "translateX(32px)",
      "&:hover": {
        backgroundColor: "rgba(24,90,257,0.08)",
      },
    },
    "& $thumb": {
        backgroundColor: '#fff',
    },
    "& + $track": {
    background: props.isFocusMode ? "linear-gradient(to right, #43cea2, #185a9d)" : "linear-gradient(to right, #ee0979, #ff6a00)",,
      "&:before": {
        opacity: 1,
      },
      "&:after": {
        opacity: 0,
      },
    },
  },
}));

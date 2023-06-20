import { styled, Switch } from "@mui/material";

export const ModePicker = styled(Switch)((props: { isDarkMode: boolean }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#F8EDD3",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        left: 1,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
          props.isDarkMode ? "#072450" : "#F8EDD3"
        )}" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: props.isDarkMode ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: props.isDarkMode ? "#F8EDD3" : "#072450",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 1,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
        props.isDarkMode ? "#072450" : "#F8EDD3"
      )}" d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: props.isDarkMode ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

// export default function ModePicker(props: {
//   sx: any;
//   isFocusMode: boolean;
//   onChangeMode: (e: any) => void;
// }) {
//   const [focus, setFocus] = React.useState<boolean>(false);
//   return (
//     <Switch
//       sx={props.sx}
//       color={focus ? "primary" : "danger"}
//       slotProps={{ input: { "aria-label": "focus mode" } }}
//       endDecorator={
//         focus ? (
//           <Visibility
//             sx={{ color: props.isFocusMode ? "text.tertiary" : "danger.600" }}
//           />
//         ) : (
//           <VisibilityOff
//             sx={{ color: props.isFocusMode ? "primary.500" : "text.tertiary" }}
//           />
//         )
//       }
//       checked={props.isFocusMode}
//       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//         setFocus(event.target.checked);
//         props.onChangeMode(event);
//       }}
//     />
//   );
// }

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemePicker } from "./themePicker";
import { ModePicker } from "./modePicker";
import { SizeDropdown } from "./sizeDropdown";

const Settings = (props: {
  size: string;
  onChangeSize: (e: any) => void;
  onChangeTheme: (e: any) => void;
  onChangeMode: (e: any) => void;
  isDarkMode: boolean;
  isFocusMode: boolean;
}) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Box
        style={{
          minHeight: 100,
          maxHeight: 100,
          backgroundColor: theme.bodyColor,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            top: 10,
            left: 10,
          }}
        >
          <FormControl focused={false}>
            <FormLabel
              sx={{
                color: theme.primaryText,
                fontWeight: "bold",
                fontSize: 20,
                position: "relative",
                left: 25,
              }}
            >
              font size
            </FormLabel>
            <SizeDropdown
              size={props.size}
              onChangeValue={props.onChangeSize}
            />
          </FormControl>
          <FormControl sx={{ position: "relative", left: 40 }} focused={false}>
            <FormLabel
              sx={{
                position: "relative",
                right: 20,
                color: theme.primaryText,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              theme
            </FormLabel>
            <ThemePicker
              sx={{
                position: "relative",
                top: 5,
                right: 20,
              }}
              checked={props.isDarkMode}
              onChange={props.onChangeTheme}
              isDarkMode={props.isDarkMode}
            />
            <FormLabel
              sx={{
                position: "relative",
                left: 65,
                bottom: 63,
                color: theme.primaryText,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              focus
            </FormLabel>
            <ModePicker
              sx={{
                position: "relative",
                bottom: 58,
                left: 60,
              }}
              checked={props.isFocusMode}
              isDarkMode={props.isDarkMode}
              onChange={props.onChangeMode}
            />
          </FormControl>
        </div>
      </Box>
      <Box
        style={{
          minHeight: 2,
          maxHeight: 2,
          backgroundColor: theme.bodyColor,
        }}
      >
        <Divider
          variant="middle"
          sx={{
            color: theme.primaryText,
            opacity: 0.5,
          }}
        />
      </Box>
      <Box
        style={{
          minHeight: 288,
          maxHeight: 288,
          backgroundColor: theme.bodyColor,
          fontWeight: "bold",
        }}
      >
        <FormControl
          sx={{ position: "relative", top: 10, left: 20 }}
          focused={false}
        >
          <FormLabel
            sx={{
              color: theme.primaryText,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            about us
          </FormLabel>
          <Typography
            color={theme.primaryText}
            sx={{ maxWidth: 340, fontWeight: "bold" }}
          >
            Hi! We are a team of three from Northeastern participating in
            Hackbeanpot. We are devs and are working on stuff sample text for a
            little bit more to show it
          </Typography>
        </FormControl>
        <Button
          sx={{
            width: 260,
            height: 40,
            position: "relative",
            top: 20,
            left: 45,
            fontWeight: "bold",
            backgroundColor: theme.boxColor,
            color: theme.primaryText,
            boxShadow: "none",
            textTransform: "lowercase",
          }}
        >
          to summary api website
        </Button>
        <Button
          sx={{
            width: 260,
            height: 40,
            position: "relative",
            top: 30,
            left: 45,
            fontWeight: "bold",
            backgroundColor: theme.boxColor,
            color: theme.primaryText,
            boxShadow: "none",
            textTransform: "lowercase",
          }}
        >
          submit feedback, bugs and more
        </Button>
      </Box>
    </>
  );
};
export default Settings;

import { Box, createTheme, ThemeProvider, Toolbar } from "@mui/material";
import React from "react";
import { AppRoutes } from "./AppRoutes";
import { colors } from "./colors";
import ResponsiveAppBar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      primary: createColor(colors.blue),
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      allVariants: {
        color: "white",
        opacity: 0.9,
      },
      body1: {
        fontSize: "18px",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Toolbar />
        {/* <Box maxWidth="lg" mx="auto" padding={4}> */}
        <AppRoutes />
        {/* </Box> */}
      </ThemeProvider>
    </>
  );
}

export default App;

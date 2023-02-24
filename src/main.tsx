import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "../index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const myTheme = createTheme({
  typography: {
    fontFamily: ["IBM Plex Mono", "monospace"].join(","),
  },
  palette: {
    //  Darkmode - green
    mode: "dark",
    text: {
      primary: "#00ff00",
    },
    // background: {
    //   default: "#303030",
    //   paper: "#403f3f",
    // },
    // primary: {
    //   main: "#303030",
    //   light: "#4B56BE",
    //   dark: "#272727",
    //   contrastText: "#00ff00",
    // },
    // secondary: {
    //   main: "#2B4970 ",
    //   light: "",
    //   dark: "",
    //   contrastText: "",
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <HashRouter basename="/portfolio-react-ts-mui"> */}
    <HashRouter>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, Global } from "@emotion/react";

import { theme, global } from "shared/styles";

import "shared/styles/font.css";
import { AppEntry } from "./app/appEntry";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Global styles={global} />
    <ThemeProvider theme={theme}>
      <AppEntry />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

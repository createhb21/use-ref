import { CSSObject } from "@emotion/react";

const root: CSSObject = {
  display: "flex",
  flexDirection: "column",
};

const container: CSSObject = {
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  marginTop: "60px",
};

const content: CSSObject = {
  flexGrow: 1,
  minHeight: "calc(100vh - 60px)",
};

const sidebar: CSSObject = {
  minWidth: "300px",
  display: "flex",
};

const footer = {
  paddingTop: "40px",
};

export { root, container, content, sidebar, footer };

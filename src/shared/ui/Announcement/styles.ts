import { CSSObject, Theme } from "@emotion/react";

const root = (theme: Theme): CSSObject => ({
  backgroundColor: theme.color.primary.mint800,
  color: theme.color.gray.gray0,
  padding: "16px",
  textAlign: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
});

export { root };

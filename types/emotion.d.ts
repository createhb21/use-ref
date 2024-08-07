import "@emotion/react";
import { theme } from "shared/styles";

type CustomTheme = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

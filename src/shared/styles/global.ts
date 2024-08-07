import { css } from "@emotion/react";
import reset from "./reset";

const global = css`
  ${reset.styles}

  :root {
    color-scheme: light only;
  }

  button {
    cursor: pointer;
  }

  button,
  input,
  select,
  textarea,
  pre {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export default global;

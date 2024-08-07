import React from "react";
import { Link } from "react-router-dom";

import * as css from "./styles";

export function LayoutProfileCard() {
  return (
    <div css={css.root}>
      <Link to="/login" />
    </div>
  );
}

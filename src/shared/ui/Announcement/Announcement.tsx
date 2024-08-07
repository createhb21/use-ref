import React from "react";

import type { ReactNode } from "react";

import * as css from "./styles";

type Props = {
  children: ReactNode;
};

export function Announcement({ children }: Props) {
  return <div css={css.root}>{children}</div>;
}

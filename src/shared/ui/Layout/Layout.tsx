import React, { type ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import * as css from "./styles";

type Props = {
  headerSlot: ReactNode;
  sidebarSlot?: ReactNode;
  announcementSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div css={css.root}>
      {props.announcementSlot}
      {props.headerSlot}
      <div css={css.container}>
        <div css={css.content}>
          <Outlet />
        </div>
        {props.sidebarSlot && (
          <aside css={css.sidebar}>{props.sidebarSlot}</aside>
        )}
      </div>
      <footer css={[css.footer, { textAlign: "center" }]}>
        <div css="text_sm">
          see source code on{" "}
          <a href="https://github.com/createhb21/use-ref">
            github/createhb21/use-ref
          </a>
        </div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}

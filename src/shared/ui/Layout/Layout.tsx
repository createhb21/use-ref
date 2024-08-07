import type { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import css from "./Layout.module.css";

type Props = {
  headerSlot: ReactNode;
  sidebarSlot?: ReactNode;
  announcementSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.announcementSlot}
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet />
        </div>
        {props.sidebarSlot && (
          <aside className={css.sidebar}>{props.sidebarSlot}</aside>
        )}
      </div>
      <footer className={css.footer}>
        <div className="text_sm">
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

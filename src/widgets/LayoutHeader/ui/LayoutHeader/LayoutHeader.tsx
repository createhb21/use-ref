import React, { type ReactNode } from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";

import { LayoutNavigation } from "widgets/LayoutNavigation";
import { PATH } from "shared/data/path";
import * as css from "./styles";

type Props = {
  rightContentSlot: ReactNode;
};

export function LayoutHeader(props: Props) {
  return (
    <header css={css.wrapper}>
      <div css={css.logoSection}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <LayoutNavigation
          tabs={[
            {
              title: "홈",
              to: [PATH.home],
            },
            {
              title: "혜택",
              to: [PATH.benefits],
            },
            {
              title: "결제",
              to: [PATH.payment],
            },
            {
              title: "자산",
              to: [PATH.assets],
            },
            {
              title: "주식",
              to: [PATH.stocks, PATH.stocksKr, PATH.stocksEn],
            },
          ]}
        />
        {props.rightContentSlot}
      </div>
    </header>
  );
}

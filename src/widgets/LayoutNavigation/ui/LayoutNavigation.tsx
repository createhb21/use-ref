import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme, CSSObject } from "@emotion/react";

import { useNavigation } from "../lib/useNavigation";
import * as css from "./styles";

interface Props {
  tabs: {
    title: string;
    to: string[];
  }[];
}

export function LayoutNavigation({ tabs }: Props) {
  const {
    color: {
      gray: { gray900 },
    },
  } = useTheme();

  const navigate = useNavigate();
  const { current, addRefs } = useNavigation();
  const { pathname } = useLocation();

  const { width, left } = useMemo(() => {
    if (!current) return { width: 0, left: 0 };

    return { width: current.offsetWidth, left: current.offsetLeft };
  }, [current, pathname]);

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div css={{ position: "relative", marginTop: "2px" }}>
      <div css={css.wrap}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            css={css.item(tab.to.includes(pathname))}
            onClick={() => handleClick(tab.to[0])}
            ref={(instance) => {
              addRefs(instance, tab.to[0]);
            }}
          >
            {tab.title}
            {pathname === tab.to[0] && current && current.offsetWidth === 0 && (
              <div
                css={{
                  width: "100%",
                  ...indicatorStyle(gray900),
                }}
              />
            )}
          </button>
        ))}
      </div>
      {tabs
        .map((item) => item.to)
        .flat()
        .includes(pathname) && (
        <div
          css={{
            ...indicatorStyle(gray900),
            width: `${width}px`,
            transition: `transform 0.3s ease-in-out, width 0.3s ease-in-out`,
            transform: `translate(${left}px)`,
          }}
        />
      )}
    </div>
  );
}

const indicatorStyle = (background: string): CSSObject => ({
  position: "absolute",
  bottom: "1px",
  height: "2px",
  borderRadius: "1px",
  background,
  // display: isActive ? 'block' : 'none',
});

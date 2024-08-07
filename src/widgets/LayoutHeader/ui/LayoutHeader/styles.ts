import { CSSObject, Theme } from "@emotion/react";

const wrapper = ({
  color: {
    gray: { gray0, gray250 },
  },
}: Theme): CSSObject => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  height: "58px",
  background: gray0,
  borderBottom: `1px solid ${gray250}`,
  padding: "0 100px",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 1000,
});

const logoSection: CSSObject = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0 30px",
};

export { wrapper, logoSection };

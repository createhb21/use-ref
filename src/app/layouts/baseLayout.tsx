import React from "react";

import { Layout } from "shared/ui";
import { LayoutHeader } from "widgets/LayoutHeader";
import { LayoutProfileCard } from "widgets/LayoutProfileCard";

export const baseLayout = (
  <Layout
    headerSlot={<LayoutHeader rightContentSlot={<LayoutProfileCard />} />}
  />
);

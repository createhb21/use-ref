import React from "react";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./appRouter";

import "shared/styles/font.css";

export function AppEntry() {
  return (
    <React.Suspense fallback={null}>
      <RouterProvider router={appRouter} />
    </React.Suspense>
  );
}

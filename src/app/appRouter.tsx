import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "@/pages/main";
import { LoginPage } from "@/pages/login";

import { AuthGuard } from "./guards/authGuard";
import { baseLayout } from "./layouts/baseLayout";

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/login",
          element: (
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
}

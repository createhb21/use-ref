import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "pages/main";
import { LoginPage } from "pages/login";
import { BenefitsPage } from "pages/benefits";
import { PaymentPage } from "pages/payment";
import { AssetsPage } from "pages/assets";
import { StocksEnPage, StocksKrPage, StocksPage } from "pages/stocks";

import { PATH } from "shared/data/path";

import { AuthGuard } from "./guards/authGuard";
import { GuestGuard } from "./guards/guestGuard";

import { baseLayout } from "./layouts/baseLayout";

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    children: [
      {
        path: PATH.home,
        element: <MainPage />,
      },
      {
        path: PATH.login,
        element: (
          <AuthGuard>
            <LoginPage />
          </AuthGuard>
        ),
      },
      {
        path: PATH.benefits,
        element: (
          <GuestGuard>
            <BenefitsPage />
          </GuestGuard>
        ),
      },
      {
        path: PATH.payment,
        element: (
          <GuestGuard>
            <PaymentPage />
          </GuestGuard>
        ),
      },
      {
        path: PATH.assets,
        element: (
          <GuestGuard>
            <AssetsPage />
          </GuestGuard>
        ),
      },
      {
        path: PATH.stocks,
        element: (
          <GuestGuard>
            <StocksPage />
          </GuestGuard>
        ),
      },
      {
        path: PATH.stocksKr,
        element: (
          <GuestGuard>
            <StocksKrPage />
          </GuestGuard>
        ),
      },
      {
        path: PATH.stocksEn,
        element: (
          <GuestGuard>
            <StocksEnPage />
          </GuestGuard>
        ),
      },
    ],
  },
]);

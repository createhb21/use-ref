import React, { type ReactElement } from "react";
import { Navigate } from "react-router-dom";

type AuthGuardProps = {
  children: ReactElement;
};

export function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = true;

  if (isAuthorized) return <Navigate to="/" />;

  return children;
}

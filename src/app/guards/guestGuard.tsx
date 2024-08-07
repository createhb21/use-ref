import React, { type ReactElement } from "react";
import { Navigate } from "react-router-dom";

type GuestGuardProps = {
  children: ReactElement;
};

export function GuestGuard({ children }: GuestGuardProps) {
  const isAuthorized = true;

  if (!isAuthorized) return <Navigate to="/login" />;

  return children;
}

import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type AuthGuardProps = {
  children: ReactElement;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthorized = false;

  if (isAuthorized) return <Navigate to="/" />;

  return children;
};

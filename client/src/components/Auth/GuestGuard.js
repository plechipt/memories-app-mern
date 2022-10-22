import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestGuard = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.users);

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default GuestGuard;

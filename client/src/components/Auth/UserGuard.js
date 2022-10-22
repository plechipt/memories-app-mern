import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserGuard = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.users);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default UserGuard;

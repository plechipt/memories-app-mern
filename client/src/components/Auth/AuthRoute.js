import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.users);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoute;

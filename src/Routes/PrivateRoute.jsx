import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((store) => store.auth.token);
  console.log(isAuth)
  if (!isAuth) {
    return <Navigate state={location.pathname} to="/" replace />;
  }
  return children;
};

export default PrivateRoute;

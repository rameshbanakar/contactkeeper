import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { Home } from "../layout/Home";
import AuthContext from "../../context/auth/AuthContext";
const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route path="/"
      
      element={<Home/>}
    />
  );
};

export default PrivateRoute;

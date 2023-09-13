import React from "react";
import LoginForm from "../components/ui/LoginForm";
import SignupForm from "../components/ui/SignupForm";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Sidebar from "../components/ui/Sidebar";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path={"/sidebar"} element={<PrivateRoute><Sidebar /></PrivateRoute>} />
        <Route path={"/"} element={<LoginForm/>} />
        <Route path={"/signup"} element={<SignupForm/>} />
      </Routes>
    </>
  );
}

export default AllRoutes;

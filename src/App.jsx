import { useSelector } from "react-redux";
import React from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AllRoutes />
      <>
      <Toaster/>
      </>
    </div>
  );
}

export default App;

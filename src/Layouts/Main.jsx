import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-xl	mx-auto">
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Main;

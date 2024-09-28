import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
  const location = useLocation()
  // console.log(location);
  const noHeadersFooters = location.pathname.includes('/login')|| location.pathname.includes('/signUp')
  return (
    <div>
      {noHeadersFooters ||<Navbar></Navbar>}
      <div className="max-w-screen-xl	mx-auto">
        <Outlet></Outlet>
      </div>
        {noHeadersFooters || <Footer></Footer>}
    </div>
  );
};

export default Main;

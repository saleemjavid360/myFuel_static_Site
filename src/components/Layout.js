import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="vh-100 d-flex flex-column w-100">
      <Navbar />
      <div className="d-flex flex-column align-items-center flex-grow-1 position-relative">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

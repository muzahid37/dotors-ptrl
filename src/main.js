import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Sheared/Footer/Footer";
import Navbar from "./Components/Sheared/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

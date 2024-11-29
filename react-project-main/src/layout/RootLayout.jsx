import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const RootLayout = ({ productsCount }) => {
  return (
    <>
      <Navbar productsCount={productsCount} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

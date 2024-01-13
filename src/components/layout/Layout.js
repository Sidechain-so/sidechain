import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Hiring from "../hiring/Hiring";
import Reviews from "../reviews/Reviews";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Hiring />
      <Reviews />
      {children}
    </>
  );
};

export default Layout;

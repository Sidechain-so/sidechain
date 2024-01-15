import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar isForHome={children.props.isForHome}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

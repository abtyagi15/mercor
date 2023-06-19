import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Navbar />
        <div>{children}</div>
      </div>
      
    </>
  );
};

export default Layout;

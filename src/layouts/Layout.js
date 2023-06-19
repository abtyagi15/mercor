import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="flex">
        <Navbar />
        <div>{children}</div>
      </div>
      <div className="border-4 h-[100vh] w-[1px] absolute top-0 left-[250px] flex-grow-1"></div>
    </div>
  );
};

export default Layout;

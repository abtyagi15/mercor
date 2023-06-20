import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex">
        <Navbar />
        <div className="border border-[#DBDBDB] h-[931px] relative top-[-106px]"></div>
        <div>{children}</div>
      </div>
      
    </div>
  );
};

export default Layout;

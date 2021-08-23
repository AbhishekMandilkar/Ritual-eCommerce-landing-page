import React from "react";
import "./navbar-styles.css";
import { BsBag } from "react-icons/bs";
function Navbar() {
  return (
    <>
      <div className="h-1 bg-ritual-blue"></div>
      <div className="navbar-container bg-white px-44 w-full select-none sticky top-0 z-20">
        <div className="navbar-items h-full flex items-center justify-between font-sans ">
          <span className="navbar-item cursor-pointer text-base">Menu</span>
          <span className="navbar-item cursor-pointer text-3xl font-bold tracking-tight m-auto ">
            Ritual
          </span>
          <span className="text-base left-items  flex items-center justify-between  ">
            <span className="navbar-item who-we-are cursor-pointer">
              Who We Are
            </span>
            <BsBag className="text-xl font-bold cursor-pointer navbar-item ml-4" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;

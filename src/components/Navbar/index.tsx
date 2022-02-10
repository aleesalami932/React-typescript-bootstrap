import React from "react";
import NavbarMenu from "./Navbar-menu";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="home" className="navbar-brand">
          Frontend Bootcamp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-targer="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;

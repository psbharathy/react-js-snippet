import React, { Component } from "react";

// Object Destructuring props wiht { totalCounters}
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-ligh">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;

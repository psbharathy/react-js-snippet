import React from "react";

// Object Destructuring props wiht { totalCounters}
const NavBar = ({ totalCounters }) => {
  console.log("NavBar- Rendered");
  return (
    <nav className="navbar navbar-light bg-ligh">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;

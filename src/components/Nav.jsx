import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="d-flex m-0">
      <ul className="d-flex justify-content-end align-items-center px-3">
        <li className="mx-1 p-2 hover">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-1 p-2 hover">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="mx-1 p-2 hover">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

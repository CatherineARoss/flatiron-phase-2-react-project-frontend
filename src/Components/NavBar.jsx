import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">Fiber Vibes</h1>
      <nav className="nav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about" exact>
          About
        </NavLink>
        <NavLink to="/cart" exact>
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
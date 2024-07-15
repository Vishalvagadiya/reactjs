import React from 'react';
import { NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Logo
      </div>
      <ul className="navbar-links">
        <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        <NavLink activeClassName="active" to={"/product"}>Products</NavLink>
        <NavLink activeClassName="active" to={"/login"}>Login/SignUp</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

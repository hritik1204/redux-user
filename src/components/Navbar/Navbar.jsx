import React from "react";
import { NavLink } from "react-router-dom";

import Menubar from "../Menubar/Menubar";

import "./Navbar.css";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      marginRight: "50px",
      paddingBottom: "21px",

      width: "64px",
      height: "24px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",

      color: isActive ? "#627EEA" : "#5a5a5a",

      textTransform: "capitalize",
      textDecoration: "none",
      borderBottom: isActive ? "2px solid #627EEA" : "none",
    };
  };

  return (
    <div className="navbar">
      <h1 className="nav-heading">ReactApp</h1>
      <Menubar />
      <nav className="nav-link">
        <NavLink style={navLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to="/team">
          Team
        </NavLink>
        <NavLink style={navLinkStyle} to="/support">
          Support
        </NavLink>
        <NavLink style={navLinkStyle} to="/contact">
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

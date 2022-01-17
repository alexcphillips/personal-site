import { NavLink } from "react-router-dom";
import "./Nav.css";
import { isActive } from "../utilities";
import { useState, useEffect } from "react";

export default function TopNav() {
  return (
    <nav id={"top-nav"}>
      <NavLink id="home" className={isActive} to="/">
        Home
      </NavLink>
      <NavLink id="family" className={isActive} to="family">
        family
      </NavLink>{" "}
      <NavLink id="game" className={isActive} to="game">
        Game
      </NavLink>{" "}
      {/* <NavLink id="excel" className={isActive} to="excel">
        Excel
      </NavLink>{" "} */}
      <NavLink id="about-me" className={isActive} to="about-me">
        About
      </NavLink>
    </nav>
  );
}

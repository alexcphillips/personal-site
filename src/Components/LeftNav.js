import "../common.css";
import "./Side.css";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import noteLinks from "./noteLinks";

export default function LeftNav() {
  return (
    <>
      <Nav className="tall bg-light left">
        <div className="small-spacer" />

        {noteLinks.map(({ to, text }, index) => {
          return (
            <Link key={`left-nav-${index}`} to={to} className="link-text">
              {text}
            </Link>
          );
        })}
      </Nav>
    </>
  );
}

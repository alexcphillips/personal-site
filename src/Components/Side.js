import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../common.css";
import "./Side.css";

import noteLinks from "./noteLinks";

export default function SideNav() {
  return (
    <>
      <div>
        <Nav className="col-md-3  d-md-block bg-light sidebar">
          <div className="small-spacer" />
          {noteLinks.map(({ to, text }, index) => {
            return (
              <div>
                <Link key={index} to={to}>
                  {text}
                </Link>
              </div>
            );
          })}
        </Nav>
      </div>
    </>
  );
}

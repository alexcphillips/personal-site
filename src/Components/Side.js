import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../common.css";
import "./Side.css";

export default function SideNav() {
  return (
    <>
      <div>
        <Nav className="col-md-3  d-md-block bg-light sidebar">
          <div className="small-spacer" />
          <Link key="1" to="launching-an-aws-ec2-instance">
            Launching an AWS Ec2 instance
          </Link>
        </Nav>
      </div>
    </>
  );
}

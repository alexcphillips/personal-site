import "../common.css";
import "./Side.css";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import relatedLinks from "./relatedLinks";

export default function RightNav() {
  return (
    <>
      <Nav className="tall bg-light right sidebar ">
        <div className="small-spacer" />
        {relatedLinks.map(({ to, text }, index) => {
          return (
            <div key={`right-nav-${index}`} className="link">
              <Link to={to} className="link-text">
                {text}
              </Link>
            </div>
          );
        })}
      </Nav>
    </>
  );
}

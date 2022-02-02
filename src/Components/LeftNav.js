import "../common.css";
import "./Side.css";

import { Link } from "react-router-dom";

import noteLinks from "./noteLinks";

export default function LeftNav() {
  return (
    <div className="tall bg-light left">
      <div className="small-spacer" />

      {noteLinks.map(({ to, text }, index) => {
        return (
          <Link
            key={`left-nav-${index}`}
            to={to}
            className="link-text"
            style={{ display: "block" }}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}

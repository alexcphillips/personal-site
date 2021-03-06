import "../../common.css";
import "./Side.css";

import { Link } from "react-router-dom";

import notes from "../notes";

export default function LeftNav() {
  return (
    <div className="tall bg-light left">
      <div className="small-spacer" />

      {notes.map(({ to, text }, index) => {
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

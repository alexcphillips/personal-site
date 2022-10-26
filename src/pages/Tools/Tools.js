import "../../common.css";
import { Container, Row } from "react-bootstrap";

import tileData from "./tools.json";
import Tile from "../../Components/Tile.js";

export default function ToolsList() {
  return (
    <Container>
      <div className="tiles-container">
        {tileData.map(({ to, name, desc }, i) => {
          return (
            <div className="tile-container">
              <Tile key={`left-nav-${i}`} to={to} name={name} desc={desc} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

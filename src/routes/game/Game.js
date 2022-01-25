// import axios from "axios";
import map from "../../Components/data/mapGrid";
import "./Game.css";
import { Hero } from "./hero";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Game() {
  const initHero = new Hero();

  const [hero, updateHero] = useState(initHero);

  for (let x = 0; x < map.length; x++) {
    console.log("x position:", x);

    for (let y = 0; y < map[x].length; y++) {
      console.log(map[x][y]);
    }
  }

  return (
    <div id="game">
      <div id="map-box">
        {map.map((row, i) => {
          return (
            <Row key={i} className="row">
              {row.map((tile, j) => {
                return (
                  <Col
                    key={j}
                    className="tile"
                    style={{ backgroundColor: tile.color }}
                  >
                    {hero.pos.x === i && hero.pos.y === j && "X"}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import "./Tile.css";
export default function Tile({ title, destination, desc }) {
  return (
    <>
      <div onClick={useNavigate(destination)} className="tile">
        <h3>{title}</h3>
        <hr />
        <p>{desc}</p>
      </div>
    </>
  );
}

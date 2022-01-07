import { getCharacters } from "../data/characters";
import { NavLink, Outlet } from "react-router-dom";
import { isActive } from "../utilities";

export default function Characters() {
  let characters = getCharacters();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {characters.map((character) => (
          <NavLink
            style={{
              display: "block",
              margin: "1rem 0"
            }}
            to={`/characters/${character.name}`}
            key={character.name}
            className={isActive}
          >
            {character.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

import { useParams } from "react-router-dom";
import { getCharacters } from "../data/characters";

export default function Character() {
  const { characterName } = useParams();
  const {
    name,
    // strength,
    weapon: { name: weaponName, power, description, img }
  } = getCharacters(characterName);
  return (
    <div className="card">
      <p>Name: {name}</p>
      {/* <p>Strength: {strength}</p> */}
      <p>Weapon: {weaponName}</p>
      <p>Damage: {power}</p>
      <p>{description}</p>

      <img src={img} alt="" className="photo" />
    </div>
  );
}

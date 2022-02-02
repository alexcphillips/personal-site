import { useParams } from "react-router-dom";

import map from "../../Components/notes";

export default function Note() {
  const { name } = useParams();

  let result;

  try {
    result = map.find((note) => note.to === name).component;
  } catch (err) {
    console.log("map", map, "name", name);
    console.log(err);
  }

  if (!result) {
    result = "No result (note.js)";
  }

  return <>{result}</>;
}

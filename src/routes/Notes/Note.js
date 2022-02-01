import { useParams } from "react-router-dom";

import map from "../../Components/notes";

export default function Note() {
  const { name } = useParams();

  let result = map[name];
  return <>{result}</>;
}

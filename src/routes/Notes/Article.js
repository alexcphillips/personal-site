import { useParams } from "react-router-dom";

import articles from "../../Components/notes";

export default function Article() {
  const { name } = useParams();

  const map = {
    "launching-an-aws-ec2-instance": articles.Ec2
  };

  let result = map[name];
  return <>{result}</>;
}

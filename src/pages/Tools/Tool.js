const tools = [];
export default function Tool() {
  const { name } = useParams();

  let result;

  try {
    result = tools.find((tool) => tool.to === name).component;
  } catch (err) {
    console.error(err);
  }
  return <>{result || "404"}</>;
}

import { useParams } from "react-router-dom";

import notes from "../../Components/notes";

export default function Note() {
    const { name } = useParams();

    let result;

    try {
        result = notes.find((note) => note.to === name).component;
    } catch (err) {
        console.error(err);
    }
    return <>{result || "404"}</>;
}

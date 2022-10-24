import { useState } from "react";

import checkedIcon from "./checkedClipboardIcon";
import clipboardIcon from "./clipboardIcon";

export default function CopyButton({ text }) {
    const [state, setState] = useState(clipboardIcon);

    function copy() {
        navigator.clipboard.writeText(text);

        setState(checkedIcon);
        setTimeout(() => {
            setState(clipboardIcon);
        }, 1500);
    }

    return (
        <>
            <button
                style={{
                    padding: 0,
                    border: 0,
                    backgroundColor: "inherit",
                }}
                onClick={copy}
            >
                {state}
            </button>
        </>
    );
}

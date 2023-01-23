import { useRef } from "react";
import { useClickOutOfArea } from "@ethan-heo/react-hooks";

export default function Docs() {
    const ref = useRef<HTMLButtonElement>(null);

    useClickOutOfArea(ref, () => {
        console.log("click");
    });

    return (
        <div>
            <h1>Docs</h1>
            <button ref={ref}>click me</button>
        </div>
    );
}

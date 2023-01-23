import { useEffect } from "react";
import findElement from "../utils/findElement";

export default function useClickOutOfArea<T extends HTMLElement>(
    target: React.RefObject<T> | HTMLElement | string,
    callback: () => void
) {
    useEffect(() => {
        const targetEl = findElement(target);

        if (!targetEl) throw TypeError(`Not found target`, { cause: target });

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };

        function handleDocumentClick(ev: MouseEvent) {
            const _target = ev.target as HTMLElement;

            if (!targetEl?.contains(_target)) {
                callback();
            }
        }
    }, []);
}

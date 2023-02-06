export default function findElement<T extends HTMLElement>(target: Target<T>) {
    if (typeof target !== "object") {
        return document.querySelector<T>(target);
    }

    if (Object.hasOwn(target, "nodeName")) {
        return target as T;
    }

    if (Object.hasOwn(target, "current")) {
        return (target as React.RefObject<T>).current;
    }

    return null;
}

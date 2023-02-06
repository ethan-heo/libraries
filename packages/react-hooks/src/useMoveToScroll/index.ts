import { useEffect, useRef } from "react";
import findElement from "../utils/findElement";

type MoveToScrollOptions = {
    boundary: number;
};

const defaultOptions: MoveToScrollOptions = {
    boundary: 40,
};

function useMoveToScroll<T extends HTMLElement>(
    target: React.RefObject<T> | HTMLElement | string,
    options: MoveToScrollOptions = defaultOptions
) {
    const state = useRef({
        isActive: false,
    });

    useEffect(() => {
        const _target = findElement(target);

        if (!_target) return;

        _target.addEventListener("mousedown", activate);
        _target.addEventListener("touchstart", activate);
        _target.addEventListener("mouseup", inactivate);
        _target.addEventListener("touchend", inactivate);
        _target.addEventListener("mousemove", moveCursor);
        _target.addEventListener("touchmove", moveTouch);

        return () => {
            _target?.removeEventListener("mousedown", activate);
            _target?.removeEventListener("touchstart", activate);
            _target?.removeEventListener("mouseup", inactivate);
            _target?.removeEventListener("touchend", inactivate);
            _target?.removeEventListener("mousemove", moveCursor);
            _target?.removeEventListener("touchmove", moveTouch);
        };

        function activate() {
            state.current.isActive = true;
        }
        function inactivate() {
            state.current.isActive = false;
        }

        function moveCursor(e: MouseEvent) {
            if (!state.current.isActive) return;

            const target = e.target as HTMLElement;

            moveToScroll(
                target,
                getPosition(target, options.boundary, getCoordinate(e))
            );
        }

        function moveTouch(e: TouchEvent) {
            if (!state.current.isActive) return;

            const target = e.target as HTMLElement;

            moveToScroll(
                target,
                getPosition(target, options.boundary, getCoordinate(e))
            );
        }
    }, [options]);
}

export default useMoveToScroll;

function getCoordinate(e: MouseEvent | TouchEvent): [number, number] {
    const { left, top } = getBoundingClientRect(e.target as HTMLElement);

    if ("clientX" in e) {
        return [e.clientX - left, e.clientY - top];
    } else {
        return [
            e.changedTouches[0].clientX - left,
            e.changedTouches[0].clientY - top,
        ];
    }
}

function getBoundingClientRect(el: HTMLElement) {
    if (el === document.body) {
        return {
            left: 0,
            top: 0,
        };
    } else {
        return el.getBoundingClientRect();
    }
}

const POSITION = {
    LEFT: 0,
    RIGHT: 1,
    TOP: 2,
    BOTTOM: 3,
    CENTER: 4,
};

function getPosition(
    target: HTMLElement,
    boundary: number,
    pos: [number, number]
) {
    const { x, y, width, height } = target.getBoundingClientRect();
    const [posX, posY] = pos;

    if (posX >= x && posX <= x + boundary) {
        return POSITION.LEFT;
    }

    if (posX >= x + width - boundary && posX <= x + width) {
        return POSITION.RIGHT;
    }

    if (posY >= y && posY <= y + boundary) {
        return POSITION.TOP;
    }

    if (posY >= y + height - boundary && posY <= y + height) {
        return POSITION.BOTTOM;
    }

    return POSITION.CENTER;
}

function moveToScroll(el: HTMLElement, position: number) {
    switch (position) {
        case POSITION.TOP:
            el.scrollTo({
                top: el.scrollTop - 20,
            });
            break;
        case POSITION.BOTTOM:
            el.scrollTo({
                top: el.scrollTop + 20,
            });
            break;
        case POSITION.LEFT:
            el.scrollTo({
                left: el.scrollLeft - 20,
            });
            break;
        case POSITION.RIGHT:
            el.scrollTo({
                left: el.scrollLeft + 20,
            });
            break;
        default:
    }
}

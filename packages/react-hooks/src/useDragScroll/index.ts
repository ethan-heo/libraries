import { useEffect, useRef } from "react";
import findElement from "../utils/findElement";

type MoveToScrollOptions = {
    boundary: number;
};

const defaultOptions: MoveToScrollOptions = {
    boundary: 40,
};

function useDragScroll<T extends HTMLElement>(
    target: React.RefObject<T> | HTMLElement | string,
    options: MoveToScrollOptions = defaultOptions
) {
    const state = useRef({
        isActive: false,
    });

    useEffect(() => {
        const _target = findElement(target);

        if (!_target) return;

        let intervId: number;

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
            window.clearInterval(intervId);
        }

        function moveCursor(e: MouseEvent) {
            if (!state.current.isActive) return;

            window.clearInterval(intervId);

            const target = e.currentTarget as HTMLElement;
            const position = getPosition(
                target,
                options.boundary,
                getCoordinate(e)
            );

            if (position !== POSITION.CENTER) {
                intervId = window.setInterval(() => {
                    moveToScroll(target, position);
                }, 10);
            }
        }

        function moveTouch(e: TouchEvent) {
            if (!state.current.isActive) return;

            window.clearInterval(intervId);

            const target = e.currentTarget as HTMLElement;
            const position = getPosition(
                target,
                options.boundary,
                getCoordinate(e)
            );

            if (e.cancelable && position !== POSITION.CENTER) {
                e.preventDefault();
            }

            if (position !== POSITION.CENTER) {
                intervId = window.setInterval(() => {
                    /**
                     * https://www.uriports.com/blog/easy-fix-for-intervention-ignored-attempt-to-cancel-a-touchmove-event-with-cancelable-false/
                     */
                    moveToScroll(target, position);
                }, 10);
            }
        }
    }, [options]);
}

export default useDragScroll;

function getCoordinate(e: MouseEvent | TouchEvent): [number, number] {
    const { left, top } = getBoundingClientRect(e.currentTarget as HTMLElement);

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
    const { width, height } = target.getBoundingClientRect();
    const [posX, posY] = pos;

    if (posX >= 0 && posX <= boundary) {
        return POSITION.LEFT;
    }

    if (posX >= width - boundary && posX <= width) {
        return POSITION.RIGHT;
    }

    if (posY >= 0 && posY <= boundary) {
        return POSITION.TOP;
    }

    if (posY >= height - boundary && posY <= height) {
        return POSITION.BOTTOM;
    }

    return POSITION.CENTER;
}

function moveToScroll(el: HTMLElement, position: number) {
    switch (position) {
        case POSITION.TOP:
            el.scrollTo({
                top: el.scrollTop - 5,
            });
            break;
        case POSITION.BOTTOM:
            el.scrollTo({
                top: el.scrollTop + 5,
            });
            break;
        case POSITION.LEFT:
            el.scrollTo({
                left: el.scrollLeft - 5,
            });
            break;
        case POSITION.RIGHT:
            el.scrollTo({
                left: el.scrollLeft + 5,
            });
            break;
        default:
    }
}

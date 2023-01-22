// @vitest-environment jsdom
import { useEffect, useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import findElement from "./findElement";

describe("[utils] findElement", () => {
    const obj = {
        click: () => {},
    };
    const spy = vi.spyOn(obj, "click").mockImplementation(() => {});

    afterEach(() => {
        spy.mockClear();
    });

    it("RefObject<HTMLElement> 인자를 받을 수 있어야 한다", () => {
        function RefTest({ onClick }: { onClick: () => void }) {
            const ref = useRef<HTMLButtonElement>(null);

            useEffect(() => {
                const target = findElement<HTMLButtonElement>(ref);

                if (target) {
                    target.addEventListener("click", () => {
                        onClick();
                    });

                    target.click();
                }
            }, []);

            return <button ref={ref}></button>;
        }

        render(<RefTest onClick={obj.click} />);

        expect(spy).toHaveBeenCalled();
    });

    it.skip("HTMLElement 인자를 받을 수 있어야 한다", () => {
        const buttonEl = findElement(document.createElement("button"))!;

        expect(buttonEl).not.toBeNull();

        buttonEl.addEventListener("click", () => {
            obj.click();
        });
        document.body.appendChild(buttonEl);
        buttonEl.click();

        expect(spy).toHaveBeenCalled();
    });
    it.skip("String 인자를 받을 수 있어야 한다", () => {
        const buttonEl = document.createElement("button")!;

        expect(buttonEl).not.toBeNull();

        buttonEl.id = "test";
        buttonEl.addEventListener("click", () => {
            obj.click();
        });
        document.body.appendChild(buttonEl);

        expect(spy).toHaveBeenCalled();

        const foundButtonEl = findElement("#test");

        expect(foundButtonEl).not.toBeNull();
    });
});

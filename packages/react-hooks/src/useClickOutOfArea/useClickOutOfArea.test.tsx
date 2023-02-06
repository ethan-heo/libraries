import React, { describe, expect, it, vi } from "vitest";
import useClickOutOfArea from "./index";
import { render } from "@testing-library/react";
import { useRef } from "react";

describe("useClickOutOfArea", () => {
    function TestComponent({ onClick }: { onClick: () => void }) {
        const ref = useRef<HTMLButtonElement>(null);
        useClickOutOfArea(ref, onClick);

        return (
            <>
                outer
                <button ref={ref}>
                    <span>inner</span>
                </button>
            </>
        );
    }

    const obj = {
        click: () => {
            console.log("click me");
        },
    };
    const spy = vi.spyOn(obj, "click").mockImplementation(() => void 0);

    it("버튼 영역 이외에 다른 영역을 클릭하면 callback 함수가 수행되어야 한다", async () => {
        const { findByText } = render(<TestComponent onClick={obj.click} />);

        const innerArea = await findByText("inner");

        innerArea.click();

        expect(spy).not.toHaveBeenCalled();

        const outerArea = await findByText("outer");

        outerArea.click();

        expect(spy).toHaveBeenCalled();
    });
});

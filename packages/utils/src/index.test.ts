import { test, expect } from "vitest";
import { add } from ".";

test(`add(1, 1)`, () => {
    expect(add(1, 1)).toBe(2);
});

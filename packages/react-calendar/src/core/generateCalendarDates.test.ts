import { it, expect, describe } from "vitest";
import generateCalendarDates from "./generateCalendarDates";

describe(`[core] generateCalendarDates`, () => {
    const DATE_FORMAT = "2023-01-27";

    it(`date 인자만 입력되었을 때 현재 날짜기준 7행 기준 6열의 날짜가 출력되어야 한다`, () => {
        const dates = generateCalendarDates(new Date(DATE_FORMAT));

        expect(dates.length).toBe(42);
    });

    it(`row 인자가 입력되었을 때 달의 첫째날 기준으로 주어진 row 만큼 출력되어야 한다`, () => {
        const dates = generateCalendarDates(new Date(DATE_FORMAT), 3);

        expect(dates[0].format("YYYY-MM-DD")).toBe("2023-01-01");
        expect(dates[dates.length - 1].format("YYYY-MM-DD")).toBe("2023-01-21");
        expect(dates.length).toBe(21);
    });
});

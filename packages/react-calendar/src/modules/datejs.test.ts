import { describe, it, expect, afterEach } from "vitest";
import datejs from "./datejs";

describe(`[module] datejs`, () => {
    const DATE = "2023-01-27T12:30";

    it(`datejs.format`, () => {
        const date = datejs(new Date(DATE));
        expect(date.format("YYYY-MM-DD HH:mm")).toBe(`2023-01-27 12:30`);
        expect(date.format("YYYY-MM-DD")).toBe(`2023-01-27`);
        expect(date.format("HH:mm")).toBe(`12:30`);
    });

    it(`datejs.toData`, () => {
        const date = datejs(new Date(DATE));
        expect(JSON.stringify(date.toData())).toBe(
            JSON.stringify({
                year: 2023,
                month: 1,
                date: 27,
                day: 5,
                hour: 12,
                minutes: 30,
            })
        );
    });

    it(`datejs.add`, () => {
        const date = datejs(new Date(DATE));

        expect(date.add(5, "date").format("YYYY-MM-DD")).toBe("2023-02-01");
        expect(date.add(2, "month").format("YYYY-MM-DD")).toBe("2023-03-27");
        expect(date.add(1, "year").format("YYYY-MM-DD")).toBe("2024-01-27");
        expect(date.add(1, "hour").format("YYYY-MM-DDTHH:mm")).toBe(
            "2023-01-27T13:30"
        );
        expect(date.add(30, "minute").format("YYYY-MM-DDTHH:mm")).toBe(
            "2023-01-27T13:00"
        );
    });

    it(`datejs.subtract`, () => {
        const date = datejs(new Date(DATE));

        expect(date.subtract(5, "date").format("YYYY-MM-DD")).toBe(
            "2023-01-22"
        );
        expect(date.subtract(2, "month").format("YYYY-MM-DD")).toBe(
            "2022-11-27"
        );
        expect(date.subtract(1, "year").format("YYYY-MM-DD")).toBe(
            "2022-01-27"
        );
        expect(date.subtract(1, "hour").format("YYYY-MM-DDTHH:mm")).toBe(
            "2023-01-27T11:30"
        );
        expect(date.subtract(30, "minute").format("YYYY-MM-DDTHH:mm")).toBe(
            "2023-01-27T12:00"
        );
    });

    describe(`datejs.get`, () => {
        const date = datejs(new Date(DATE));

        it(`datejs.get(Number, 'year')`, () => {
            expect(date.get("year")).toBe(2023);
        });
        it(`datejs.get(Number, 'month')`, () => {
            expect(date.get("month")).toBe(1);
        });
        it(`datejs.get(Number, 'date')`, () => {
            expect(date.get("date")).toBe(27);
        });
        it(`datejs.get(Number, 'hour')`, () => {
            expect(date.get("hour")).toBe(12);
        });
        it(`datejs.get(Number, 'minute')`, () => {
            expect(date.get("minute")).toBe(30);
        });
    });

    describe(`datejs.set`, () => {
        const date = datejs(new Date(DATE));

        it(`datejs.set(Number, 'year')`, () => {
            const datejs = date.set(2024, "year");

            expect(datejs.get("year")).toBe(2024);
        });
        it(`datejs.set(Number, 'month')`, () => {
            const datejs = date.set(2, "month");

            expect(datejs.get("month")).toBe(2);
        });
        it(`datejs.set(Number, 'date')`, () => {
            const datejs = date.set(1, "date");

            expect(datejs.get("date")).toBe(1);
        });
        it(`datejs.set(Number, 'hour')`, () => {
            const datejs = date.set(1, "hour");

            expect(datejs.get("hour")).toBe(1);
        });
        it(`datejs.set(Number, 'minute')`, () => {
            const datejs = date.set(25, "minute");

            expect(datejs.get("minute")).toBe(25);
        });
    });

    describe(`datejs.toRange`, () => {
        const END_DATE_1 = "2023-02-28";
        const END_DATE_2 = "2022-12-10";
        let date = datejs(new Date(DATE));

        afterEach(() => {
            date = datejs(new Date(DATE));
        });

        it(`datejs.toRange(${END_DATE_1}, 'year')`, () => {
            const range = date.toRange(new Date(END_DATE_1), "year");

            expect(range.length).toBe(1);
        });

        it(`datejs.toRange(${END_DATE_1}, 'month')`, () => {
            const range = date.toRange(new Date(END_DATE_1), "month");

            expect(range.length).toBe(2);
        });

        it(`datejs.toRange(${END_DATE_1}, 'date')`, () => {
            const range = date.toRange(new Date(END_DATE_1), "date");

            expect(range.length).toBe(32);
        });

        it(`datejs.toRange(${END_DATE_2}, 'year')`, () => {
            const range = date.toRange(new Date(END_DATE_2), "year");

            expect(range.length).toBe(1);
        });

        it(`datejs.toRange(${END_DATE_2}, 'month')`, () => {
            const range = date.toRange(new Date(END_DATE_2), "month");

            expect(range.length).toBe(2);
        });

        it(`datejs.toRange(${END_DATE_2}, 'date')`, () => {
            const range = date.toRange(new Date(END_DATE_2), "date");

            expect(range.length).toBe(49);
        });
    });
});

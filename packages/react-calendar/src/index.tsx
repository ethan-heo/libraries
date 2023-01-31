import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import Calendar, { CalendarOption } from "./core";
import { DateJs } from "./modules/datejs";

type ReactCalendarProps = CalendarOption;

const defaultOption: ReactCalendarProps = {
    date: new Date(),
};

export type CalendarImperativeHandlers = {
    getApi: () => Calendar;
};

const ReactCalendar = React.forwardRef(
    (
        option: ReactCalendarProps = defaultOption,
        ref: React.ForwardedRef<CalendarImperativeHandlers>
    ) => {
        const calendarApi = useRef(new Calendar()).current;
        const [range, setRange] = useState<DateJs[][]>([]);

        useImperativeHandle(ref, () => ({
            getApi: () => {
                return calendarApi;
            },
        }));

        useEffect(() => {
            calendarApi.on("range", updateRange);
            calendarApi.setRange(option.date || new Date(), option.row);

            return () => {
                calendarApi.off("range", updateRange);
            };

            function updateRange(range: DateJs[]) {
                setRange(mutateRange(range));
            }

            function mutateRange(range: DateJs[]) {
                const result: DateJs[][] = [];
                let temp: DateJs[] = [];

                range.forEach((range, index) => {
                    if (index !== 0 && index % 7 === 0) {
                        result.push(temp);
                        temp = [];
                    }

                    temp.push(range);
                });

                result.push(temp);

                return result;
            }
        }, [option.date, option.row]);

        console.log(range);

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>일</td>
                            <td>월</td>
                            <td>화</td>
                            <td>수</td>
                            <td>목</td>
                            <td>금</td>
                            <td>토</td>
                        </tr>
                    </thead>
                    <tbody>
                        {range.map((rangeArr, index) => {
                            return (
                                <tr key={`rc-row-${index}`}>
                                    {rangeArr.map((range) => {
                                        const dateStr =
                                            range.format("YYYY-MM-DD");
                                        return <td key={dateStr}>{dateStr}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
);

ReactCalendar.displayName = "ReactCalendar";

export default ReactCalendar;

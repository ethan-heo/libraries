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
        const [range, setRange] = useState(calendarApi.getRange());

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
                setRange(range);
            }
        }, [option.date, option.row]);

        return (
            <div>
                {range.map((r) => {
                    const formattedText = r.format("YYYY-MM-DD");
                    return <li key={formattedText}>{formattedText}</li>;
                })}
            </div>
        );
    }
);

ReactCalendar.displayName = "ReactCalendar";

export default ReactCalendar;

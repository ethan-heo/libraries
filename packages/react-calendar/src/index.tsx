import React, { useEffect, useRef, useState } from "react";
import Calendar, { CalendarOption } from "./core";
import { DateJs } from "./modules/datejs";

type ReactCalendarProps = CalendarOption;

const defaultOption: ReactCalendarProps = {
    date: new Date(),
};

function ReactCalendar(option: ReactCalendarProps = defaultOption) {
    const optionRef = useRef(new Calendar()).current;
    const [range, setRange] = useState(optionRef.getRange());

    useEffect(() => {
        optionRef.on("range", updateRange);
        optionRef.setRange(option.date || new Date(), option.row);

        return () => {
            optionRef.off("range", updateRange);
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

export default ReactCalendar;

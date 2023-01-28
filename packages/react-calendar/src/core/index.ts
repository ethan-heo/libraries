import { DateJs } from "../modules/datejs";
import generateCalendarDates from "./generateCalendarDates";

export type CalendarOption = {
    row?: number;
    date?: Date;
};

type CalendarEventMap = {
    range: (range: DateJs[]) => void;
};
type CalendarEventKey = keyof CalendarEventMap;
type CalendarEventValue<Name extends CalendarEventKey> = CalendarEventMap[Name];

class Calendar {
    private range: DateJs[] = [];
    private events = new Map<
        CalendarEventKey,
        Set<CalendarEventValue<CalendarEventKey>>
    >();

    getRange() {
        return this.range;
    }

    setRange(date: Date, row?: number) {
        this.range = generateCalendarDates(date, row);

        this.events.get("range")?.forEach((callback) => callback(this.range));
    }

    on<Name extends CalendarEventKey>(
        name: Name,
        callback: CalendarEventValue<Name>
    ) {
        const { events } = this;
        const callbacks = events.get(name) || new Set();

        if (!events.has(name)) {
            events.set(name, callbacks);
        }

        callbacks.add(callback);
    }

    off<Name extends CalendarEventKey>(
        name: Name,
        callback: CalendarEventValue<Name>
    ) {
        const { events } = this;

        if (!events.has(name)) return;

        const callbacks = events.get(name)!;

        callbacks.delete(callback);
    }
}

export default Calendar;

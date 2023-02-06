import datejs, { DateJs } from "../modules/datejs";
import generateCalendarDates from "./generateCalendarDates";

type CalendarEventMap = {
    dates: (dates: DateJs[]) => void;
};
type CalendarEventKey = keyof CalendarEventMap;
type CalendarEventValue<Name extends CalendarEventKey> = CalendarEventMap[Name];

class Calendar {
    private currentDate: DateJs;
    private dates: DateJs[] = [];
    private events = new Map<
        CalendarEventKey,
        Set<CalendarEventValue<CalendarEventKey>>
    >();

    constructor(date: Date) {
        this.currentDate = datejs(date);
    }

    getDates() {
        return this.dates;
    }

    setDates(date: Date, row?: number) {
        this.dispatch("dates", (this.dates = generateCalendarDates(date, row)));
    }

    next() {
        this.dispatch(
            "dates",
            (this.dates = generateCalendarDates(
                (this.currentDate = this.currentDate.add(1, "month"))
            ))
        );
    }

    prev() {
        this.dispatch(
            "dates",
            (this.dates = generateCalendarDates(
                (this.currentDate = this.currentDate.subtract(1, "month"))
            ))
        );
    }

    format(value: string) {
        return this.currentDate.format(value);
    }

    dispatch<Name extends CalendarEventKey>(
        name: Name,
        ...value: Parameters<CalendarEventValue<Name>>
    ) {
        this.events
            .get(name)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ?.forEach((callback) => callback(...value));
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

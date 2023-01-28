import datejs, { DateJs } from "../modules/datejs";

export default function generateCalendarDates(date: Date, row = 6): DateJs[] {
    let _date = datejs(date);

    _date = _date.set(1, "date");
    _date = _date.subtract((7 - _date.get("day")) % 7, "date");

    return _date.toRange(_date.add(7 * row, "date"), "date");
}

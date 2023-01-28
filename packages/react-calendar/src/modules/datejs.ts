type Unit = "year" | "month" | "date" | "hour" | "minute" | "day";

function datejs(date: Date | DateJs) {
    return new DateJs(date);
}

export default datejs;

export class DateJs {
    date: Date;

    constructor(date: Date | DateJs) {
        if (date instanceof DateJs) {
            this.date = new Date(date.valueOf());
        } else {
            this.date = new Date(date.valueOf());
        }
    }

    set(value: number, unit: Unit) {
        const _date = this.clone();

        switch (unit) {
            case "year":
                _date.setFullYear(value);
                break;
            case "month":
                _date.setMonth(value - 1);
                break;
            case "date":
                _date.setDate(value);
                break;
            case "hour":
                _date.setHours(value);
                break;
            case "minute":
                _date.setMinutes(value);
                break;
        }

        return new DateJs(_date);
    }

    get(unit: Unit) {
        const _date = this.clone();

        switch (unit) {
            case "year":
                return _date.getFullYear();
            case "month":
                return _date.getMonth() + 1;
            case "date":
                return _date.getDate();
            case "hour":
                return _date.getHours();
            case "minute":
                return _date.getMinutes();
            case "day":
                return _date.getDay();
        }
    }

    add(value: number, unit: Exclude<Unit, "day">) {
        return this.set(this.get(unit) + value, unit);
    }

    subtract(value: number, unit: Exclude<Unit, "day">) {
        return this.set(this.get(unit) - value, unit);
    }

    format(format: string) {
        return format.replace(/(YYYY)|(MM)|(DD)|(HH)|(mm)/g, (match) => {
            let replacedStr = match;

            switch (match) {
                case "YYYY":
                    replacedStr = `${this.date.getFullYear()}`;
                    break;
                case "MM":
                    replacedStr = this.formatFullDate(this.date.getMonth() + 1);
                    break;
                case "DD":
                    replacedStr = this.formatFullDate(this.date.getDate());
                    break;
                case "HH":
                    replacedStr = this.formatFullDate(this.date.getHours());
                    break;
                case "mm":
                    replacedStr = this.formatFullDate(this.date.getMinutes());
                    break;
            }

            return replacedStr;
        });
    }

    toRange(
        date: Date | DateJs,
        unit: Extract<Unit, "year" | "month" | "date">
    ): DateJs[] {
        const _date = datejs(date);
        const comparison = this.getComparison(date);

        if (comparison === 0) {
            return [datejs(date)];
        }

        // eslint-disable-next-line prefer-const
        let [startDate, endDate] =
            comparison > 0
                ? [datejs(this.date), _date]
                : [_date, datejs(this.date)];
        const result: DateJs[] = [];

        while (startDate.valueOf() < endDate.valueOf()) {
            result.push(startDate);
            startDate = startDate.add(1, unit);
        }

        return result;
    }

    toData() {
        return {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate(),
            day: this.date.getDay(),
            hour: this.date.getHours(),
            minutes: this.date.getMinutes(),
        };
    }

    valueOf() {
        return this.date.valueOf();
    }

    private clone() {
        return new Date(this.date.toISOString());
    }

    private formatFullDate(date: number) {
        return date < 10 ? `0${date}` : `${date}`;
    }

    private getComparison(date: Date | DateJs) {
        const value = datejs(date).set(0, "hour").set(0, "minute").valueOf();
        const currentDateValue = this.set(0, "hour").set(0, "minute").valueOf();

        return value === currentDateValue
            ? 0
            : value > currentDateValue
            ? 1
            : -1;
    }
}

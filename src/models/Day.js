const {DateTime} = require("luxon");

/**
 * Model representing day of month and year.
 */
export default class Day {

    constructor(year, month, scopeMonth, value) {
        this.year = year;
        this.month = month;
        this.scopeMonth = scopeMonth;
        this.value = value;
        this.date = DateTime.fromObject({
            year: this.year,
            month: this.month,
            day: this.value
        });
    }

    isInMonthScope() {
        return this.month === this.scopeMonth;
    }

    isWeekend() {
        let weekday = this.date.weekday;
        return weekday === 6 || weekday === 7;
    }

    isCurrent() {
        let weekday = this.date.weekday;
        return weekday === 6 || weekday === 7;
    }
}
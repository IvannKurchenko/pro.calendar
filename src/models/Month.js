import Week from "./Week";

const {DateTime} = require("luxon");

/**
 * Model representing month of year.
 */
export default class Month {

    constructor(year, quarter, value) {
        this.year = year;
        this.quarter = quarter;
        this.value = value;
        this.date = DateTime.fromObject({
            year: this.year,
            month: this.value
        });
    }

    /**
     * If this month is current.
     */
    isCurrent() {
        let now = DateTime.now();
        return now.month === this.value;
    }

    /**
     * Return array of month weeks;
     */
    weeks() {
        const monthStart = DateTime.fromObject({
            year: this.year,
            month: this.value,
            day: 1
        });

        const monthEnd = DateTime.fromObject({
            year: this.year,
            month: this.value,
            day: monthStart.daysInMonth
        });

        let startWeek = monthStart.weekNumber;
        let endWeek = monthEnd.weekNumber;

        let self = this;
        const range = function (from, to) {
            let array = []
            for (let week = from; week <= to; week++) {
                array.push(new Week(self.year, self.value, week));
            }
            return array;
        };

        let weeks;

        if (startWeek > endWeek) {
            weeks = range(1, endWeek);
            weeks.unshift(new Week(this.year - 1, 12, startWeek))
        } else {
            weeks = range(startWeek, endWeek);
        }

        return weeks;
    }

    name() {
        return this.date.monthLong;
    }

    /**
     * Create month model relatively to year quarter
     */
    static quarterMonth(year, quarter, month) {
        let shift = (quarter - 1) * 3;
        let value = shift + month;
        return new Month(year, quarter, value);
    }
}
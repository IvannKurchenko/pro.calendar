import CalendarQuarter from "./CalendarQuarter";
import CalendarSegmentSummary from "./CelendarSegmentSummary";

const {DateTime} = require("luxon");

/**
 * Model representing half of year.
 */
export default class CalendarHalf {

    constructor(year, half) {
        this.year = year;
        this.value = half;
    }

    quarters() {
        let firstQuarter = CalendarQuarter.halfQuarter(this.year, this.value, 1);
        let secondQuarter = CalendarQuarter.halfQuarter(this.year, this.value, 2);
        return [firstQuarter, secondQuarter];
    }


    summary() {
        let from = DateTime.now();

        let lastMonthNum = this.value * 6;
        let lastMonthDays = DateTime.fromObject({ year: this.year, month: lastMonthNum}).daysInMonth;
        let to = DateTime.fromObject({ year: this.year, month: lastMonthNum, day: lastMonthDays});

        return CalendarSegmentSummary.summary("half", from, to);
    }

    /**
     * If this month is current.
     */
    isCurrent() {
        let now = DateTime.now();
        let currentHalf = now.month <= 6 ? 1 : 2;
        return this.value === currentHalf;
    }
}
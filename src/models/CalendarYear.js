import CalendarHalf from "./CalendarHalf";
import {DateTime} from "luxon";
import CalendarSegmentSummary from "./CelendarSegmentSummary";

/**
 * Model representing year.
 */
export default class CalendarYear {

    constructor(value) {
        this.value = value;
    }

    summary() {
        let from = DateTime.now();
        let to = DateTime.fromObject({ year: from.year, month: 12, day: 31 });
        return CalendarSegmentSummary.summary("year", from, to);
    }

    currentHalf() {
        return this.halfs().filter(function (half) {
            return half.isCurrent();
        })[0];
    }

    halfs() {
        let first = new CalendarHalf(this.value, 1);
        let second = new CalendarHalf(this.value, 2);
        return [first, second];
    }
}
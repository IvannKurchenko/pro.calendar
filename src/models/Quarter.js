import Month from "./Month";

const {DateTime} = require("luxon");

/**
 * Model representing quarter of year.
 */
export default class Quarter {

    constructor(year, half, quarter) {
        this.year = year;
        this.half = half;
        this.value = quarter;
    }

    months() {
        return [
            Month.quarterMonth(this.year, this.half, this.value, 1),
            Month.quarterMonth(this.year, this.half, this.value, 2),
            Month.quarterMonth(this.year, this.half, this.value, 3),
        ];
    }

    isCurrent() {
        let now = DateTime.now();
        let monthsPerQuarter = 3;
        let currentQuarter = Math.ceil(now.month / monthsPerQuarter);
        return currentQuarter === this.value;
    }

    /**
     * Create quarter model relatively to year half
     */
    static halfQuarter(year, half, quarter) {
        let value = (half === 1 ? 0 : 2) + quarter;
        return new Quarter(year, half, value);
    }
}
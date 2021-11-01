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

    isCurrent() {
        let now = DateTime.now();
        let currentQuarter = Math.ceil(now.month / 3);
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
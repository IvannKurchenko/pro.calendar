const {DateTime} = require("luxon");

/**
 * Model representing half of year.
 */
export default class Half {

    constructor(year, half) {
        this.year = year;
        this.value = half;
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
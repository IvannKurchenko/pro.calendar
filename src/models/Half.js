import Quarter from "./Quarter";

const {DateTime} = require("luxon");

/**
 * Model representing half of year.
 */
export default class Half {

    constructor(year, half) {
        this.year = year;
        this.value = half;
    }

    quarters() {
        let firstQuarter = Quarter.halfQuarter(this.year, this.value, 1);
        let secondQuarter = Quarter.halfQuarter(this.year, this.value, 1);
        return [firstQuarter, secondQuarter];
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
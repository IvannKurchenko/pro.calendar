import Day from "./Day";

const {DateTime} = require("luxon");

/**
 * Model representing year week
 */
export default class Week {

    constructor(year, month, value) {
        this.year = year;
        this.month = month;
        this.value = value;
    }

    isStub() {
        return false;
    }

    days() {
        let self = this;
        const range = function (from, to) {
            let array = []
            for (let day = from; day <= to; day++) {
                let date = DateTime.fromObject({weekYear: self.year, weekNumber: self.value}).plus({days: day});
                let dayModel = new Day(date.year, date.month, self.month, date.day);
                array.push(dayModel);
            }
            return array;
        };
        return range(0, 6);
    }

    /**
     * If this week is current.
     */
    isCurrent() {
        let now = DateTime.now();
        return now.weekNumber === this.value && now.year === this.year;
    }
}
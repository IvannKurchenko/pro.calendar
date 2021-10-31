const {DateTime} = require("luxon");

export default class Month {

    constructor(value) {
        this.value = value;
    }

    isCurrent() {
        let now = DateTime.now();
        return now.month === this.value;
    }

    name() {
        return Month.monthNames[this.value - 1];
    }

    static quarterMonth(quarter, month) {
        let shift = (quarter - 1) * 3;
        return new Month(shift + month);
    }

    static monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
}
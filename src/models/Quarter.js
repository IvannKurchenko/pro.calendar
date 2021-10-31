const {DateTime} = require("luxon");

export default class Quarter {

    constructor(value) {
        this.value = value;
    }

    isCurrent() {
        let now = DateTime.now();
        let currentIsFirst = now.month / 4;
        return currentIsFirst && this.half === 1;
    }

    static halfQuarter(half, quarter) {
        let shift = half === 1 ? 0 : 2;
        return new Quarter(shift + quarter);
    }
}
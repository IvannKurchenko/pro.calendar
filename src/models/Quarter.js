const {DateTime} = require("luxon");

export default class Quarter {

    constructor(value) {
        this.value = value;
    }

    isCurrent() {
        let now = DateTime.now();
        let currentQuarter = Math.ceil(now.month / 3);
        return currentQuarter === this.value;
    }

    static halfQuarter(half, quarter) {
        let shift = half === 1 ? 0 : 2;
        return new Quarter(shift + quarter);
    }
}
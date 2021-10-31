const {DateTime} = require("luxon");

export default class Half {

    constructor(value) {
        this.value = value;
    }

    isCurrent() {
        let now = DateTime.now();
        let currentHalf = now.month <= 6 ? 1 : 2;
        return this.value === currentHalf;
    }
}
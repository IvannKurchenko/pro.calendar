const {DateTime} = require("luxon");

export default class Half {

    constructor(value) {
        this.value = value;
    }

    isCurrent() {
        let now = DateTime.now();
        let currentIsFirst = now.month <= 6;
        return currentIsFirst && this.value === 1;
    }
}
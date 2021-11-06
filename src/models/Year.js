import Half from "./Half";

/**
 * Model representing year.
 */
export default class Year {

    constructor(value) {
        this.value = value;
    }

    weeksLeft() {
        return null;
    }

    workDaysLeft() {
        return null
    }

    weekendsDaysLeft() {
        return null;
    }

    halfs() {
        let first = new Half(this.value, 1);
        let second = new Half(this.value, 2);
        return [first, second];
    }
}
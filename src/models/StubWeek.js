import StubDay from "./StubDay";

/**
 * Model representing stub week - just a row for month table aligning
 */
export default class StubWeek {

    constructor() {
        this.value = "0";
    }

    isStub() {
        return true;
    }

    days() {
        let days = [];
        for(let i = 0; i < 7; i++) {
            days.push(new StubDay());
        }
        return days;
    }

    isCurrent() {
        return false;
    }
}
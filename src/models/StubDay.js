export default class StubDay {
    constructor() {
        this.value = "";
    }

    isStub() {
        return true;
    }

    isInMonthScope() {
        return false;
    }

    isWeekend() {
        return false;
    }

    isCurrent() {
        return false;
    }
}
import {DateTime} from "luxon";

export default class CalendarSegmentSummary {
    constructor(segment, weeksLeft, workDaysLeft, weekendsDaysLeft) {
        this.segment = segment;
        this.weeksLeft = weeksLeft;
        this.workDaysLeft = workDaysLeft;
        this.weekendsDaysLeft = weekendsDaysLeft;
    }


    static summary(segment, from, to) {
        let now = DateTime.now();
        let weeksLeft = now.weeksInWeekYear - now.weekNumber;
        let workDaysLeft = this.daysLeft(from, to, function (weekday) {
            return weekday !== 6 && weekday !== 7;
        });
        let weekendsDaysLeft = this.daysLeft(from, to, function (weekday) {
            return weekday === 6 || weekday === 7;
        });

        return new CalendarSegmentSummary(segment, weeksLeft, workDaysLeft, weekendsDaysLeft);
    }


    static daysLeft(from, to, filter) {
        let date = from;
        let daysLeft = 0;

        while (date <= to) {
            let weekday = date.weekday;
            if (filter(weekday)) {
                daysLeft++;
            }
            date = date.plus({day: 1});
        }

        return daysLeft;
    }
}
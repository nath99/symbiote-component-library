"use strict";
exports.__esModule = true;
exports.startOfYearPeriod = exports.getWeek = exports.dayOfTheWeekOf = exports.addYears = exports.addMonths = exports.addWeeks = exports.addDays = exports.dateValue = exports.today = exports.stripTime = void 0;
function stripTime(timeValue) {
    return new Date(timeValue).setHours(0, 0, 0, 0);
}
exports.stripTime = stripTime;
function today() {
    return new Date().setHours(0, 0, 0, 0);
}
exports.today = today;
// Get the time value of the start of given date or year, month and day
function dateValue() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 0:
            return today();
        case 1:
            return stripTime(args[0]);
    }
    // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
    var newDate = new Date(0);
    newDate.setFullYear.apply(newDate, args);
    return newDate.setHours(0, 0, 0, 0);
}
exports.dateValue = dateValue;
function addDays(date, amount) {
    var newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + amount);
}
exports.addDays = addDays;
function addWeeks(date, amount) {
    return addDays(date, amount * 7);
}
exports.addWeeks = addWeeks;
function addMonths(date, amount) {
    // If the day of the date is not in the new month, the last day of the new
    // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
    var newDate = new Date(date);
    var monthsToSet = newDate.getMonth() + amount;
    var expectedMonth = monthsToSet % 12;
    if (expectedMonth < 0) {
        expectedMonth += 12;
    }
    var time = newDate.setMonth(monthsToSet);
    return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}
exports.addMonths = addMonths;
function addYears(date, amount) {
    // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
    // new year will be returned.
    var newDate = new Date(date);
    var expectedMonth = newDate.getMonth();
    var time = newDate.setFullYear(newDate.getFullYear() + amount);
    return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}
exports.addYears = addYears;
// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
    return (day - from + 7) % 7;
}
// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart) {
    if (weekStart === void 0) { weekStart = 0; }
    var baseDay = new Date(baseDate).getDay();
    return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}
exports.dayOfTheWeekOf = dayOfTheWeekOf;
// Get the ISO week of a date
function getWeek(date) {
    // start of ISO week is Monday
    var thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
    // 1st week == the week where the 4th of January is in
    var firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
    return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}
exports.getWeek = getWeek;
// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
    /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
    var year = new Date(date).getFullYear();
    return Math.floor(year / years) * years;
}
exports.startOfYearPeriod = startOfYearPeriod;

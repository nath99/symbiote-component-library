"use strict";
exports.__esModule = true;
exports.formatDate = exports.parseDate = exports.reNonDateParts = exports.reFormatTokens = void 0;
var date_js_1 = require("./date.js");
var utils_js_1 = require("./utils.js");
// pattern for format parts
exports.reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
exports.reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
var knownFormats = {};
// parse funtions for date parts
var parseFns = {
    y: function (date, year) {
        return new Date(date).setFullYear(parseInt(year, 10));
    },
    M: undefined,
    m: function (date, month, locale) {
        var newDate = new Date(date);
        var monthIndex = parseInt(month, 10) - 1;
        if (isNaN(monthIndex)) {
            if (!month) {
                return NaN;
            }
            var monthName_1 = month.toLowerCase();
            var compareNames = function (name) { return name.toLowerCase().startsWith(monthName_1); };
            // compare with both short and full names because some locales have periods
            // in the short names (not equal to the first X letters of the full names)
            monthIndex = locale.monthsShort.findIndex(compareNames);
            if (monthIndex < 0) {
                monthIndex = locale.months.findIndex(compareNames);
            }
            return monthIndex < 0 ? NaN : newDate.setMonth(monthIndex);
        }
        newDate.setMonth(monthIndex);
        return newDate.getMonth() !== normalizeMonth(monthIndex)
            ? newDate.setDate(0)
            : newDate.getTime();
    },
    d: function (date, day) {
        return new Date(date).setDate(parseInt(day, 10));
    }
};
parseFns.M = parseFns.m; // make "M" an alias of "m"
// format functions for date parts
var formatFns = {
    d: function (date) {
        return date.getDate();
    },
    dd: function (date) {
        return padZero(date.getDate(), 2);
    },
    D: function (date, locale) {
        return locale.daysShort[date.getDay()];
    },
    DD: function (date, locale) {
        return locale.days[date.getDay()];
    },
    m: function (date) {
        return date.getMonth() + 1;
    },
    mm: function (date) {
        return padZero(date.getMonth() + 1, 2);
    },
    M: function (date, locale) {
        return locale.monthsShort[date.getMonth()];
    },
    MM: function (date, locale) {
        return locale.months[date.getMonth()];
    },
    y: function (date) {
        return date.getFullYear();
    },
    yy: function (date) {
        return padZero(date.getFullYear(), 2).slice(-2);
    },
    yyyy: function (date) {
        return padZero(date.getFullYear(), 4);
    }
};
// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
    return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}
function padZero(num, length) {
    return num.toString().padStart(length, '0');
}
function parseFormatString(format) {
    if (typeof format !== 'string') {
        throw new Error("Invalid date format.");
    }
    if (format in knownFormats) {
        return knownFormats[format];
    }
    // sprit the format string into parts and seprators
    var separators = format.split(exports.reFormatTokens);
    var parts = format.match(new RegExp(exports.reFormatTokens, 'g'));
    if (separators.length === 0 || !parts) {
        throw new Error("Invalid date format.");
    }
    // collect format functions used in the format
    var partFormatters = parts.map(function (token) { return formatFns[token]; });
    // collect parse functions used in the format
    // iterate over parseFns' keys in order to keep the order of the keys.
    var partParsers = Object.keys(parseFns).reduce(function (parsers, key) {
        var token = parts.find(function (part) { return part[0] === key; });
        if (!token) {
            return parsers;
        }
        parsers[key] = parseFns[key];
        return parsers;
    }, {});
    var partParserKeys = Object.keys(partParsers);
    return knownFormats[format] = {
        parser: function (dateStr, locale) {
            var dateParts = dateStr.split(exports.reNonDateParts).reduce(function (dtParts, part, index) {
                if (part.length > 0 && parts[index]) {
                    var token = parts[index][0];
                    if (parseFns[token] !== undefined) {
                        dtParts[token] = part;
                    }
                }
                return dtParts;
            }, {});
            // iterate over partParsers' keys so that the parsing is made in the oder
            // of year, month and day to prevent the day parser from correcting last
            // day of month wrongly
            return partParserKeys.reduce(function (origDate, key) {
                var newDate = partParsers[key](origDate, dateParts[key], locale);
                // ingnore the part failed to parse
                return isNaN(newDate) ? origDate : newDate;
            }, date_js_1.today());
        },
        formatter: function (date, locale) {
            var dateStr = partFormatters.reduce(function (str, fn, index) {
                return str += "" + separators[index] + fn(date, locale);
            }, '');
            // separators' length is always parts' length + 1,
            return dateStr += utils_js_1.lastItemOf(separators);
        }
    };
}
function parseDate(dateStr, format, locale) {
    if (dateStr instanceof Date || typeof dateStr === 'number') {
        var date = date_js_1.stripTime(dateStr);
        return isNaN(date) ? undefined : date;
    }
    if (!dateStr) {
        return undefined;
    }
    if (dateStr === 'today') {
        return date_js_1.today();
    }
    if (format && format.toValue) {
        var date = format.toValue(dateStr, format, locale);
        return isNaN(date) ? undefined : date_js_1.stripTime(date);
    }
    return parseFormatString(format).parser(dateStr, locale);
}
exports.parseDate = parseDate;
function formatDate(date, format, locale) {
    if (isNaN(date) || (!date && date !== 0)) {
        return '';
    }
    var dateObj = typeof date === 'number' ? new Date(date) : date;
    if (format.toDisplay) {
        return format.toDisplay(dateObj, format, locale);
    }
    return parseFormatString(format).formatter(dateObj, locale);
}
exports.formatDate = formatDate;

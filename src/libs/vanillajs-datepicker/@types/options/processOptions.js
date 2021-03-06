"use strict";
exports.__esModule = true;
var utils_js_1 = require("../lib/utils.js");
var date_js_1 = require("../lib/date.js");
var date_format_js_1 = require("../lib/date-format.js");
var dom_js_1 = require("../lib/dom.js");
var defaultOptions_js_1 = require("./defaultOptions.js");
var defaultLang = defaultOptions_js_1["default"].language, defaultFormat = defaultOptions_js_1["default"].format, defaultWeekStart = defaultOptions_js_1["default"].weekStart;
// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
    return dow.length < 6 && day >= 0 && day < 7
        ? utils_js_1.pushUnique(dow, day)
        : dow;
}
function calcEndOfWeek(startOfWeek) {
    return (startOfWeek + 6) % 7;
}
// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
    var date = date_format_js_1.parseDate(value, format, locale);
    return date !== undefined ? date : origValue;
}
// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue) {
    var viewId = parseInt(value, 10);
    return viewId >= 0 && viewId < 4 ? viewId : origValue;
}
// Create Datepicker configuration to set
function processOptions(options, datepicker) {
    var inOpts = Object.assign({}, options);
    var config = {};
    var locales = datepicker.constructor.locales;
    var _a = datepicker.config || {}, format = _a.format, language = _a.language, locale = _a.locale, maxDate = _a.maxDate, maxView = _a.maxView, minDate = _a.minDate, startView = _a.startView, weekStart = _a.weekStart;
    if (inOpts.language) {
        var lang = void 0;
        if (inOpts.language !== language) {
            if (locales[inOpts.language]) {
                lang = inOpts.language;
            }
            else {
                // Check if langauge + region tag can fallback to the one without
                // region (e.g. fr-CA → fr)
                lang = inOpts.language.split('-')[0];
                if (locales[lang] === undefined) {
                    lang = false;
                }
            }
        }
        delete inOpts.language;
        if (lang) {
            language = config.language = lang;
            // update locale as well when updating language
            var origLocale = locale || locales[defaultLang];
            // use default language's properties for the fallback
            locale = Object.assign({
                format: defaultFormat,
                weekStart: defaultWeekStart
            }, locales[defaultLang]);
            if (language !== defaultLang) {
                Object.assign(locale, locales[language]);
            }
            config.locale = locale;
            // if format and/or weekStart are the same as old locale's defaults,
            // update them to new locale's defaults
            if (format === origLocale.format) {
                format = config.format = locale.format;
            }
            if (weekStart === origLocale.weekStart) {
                weekStart = config.weekStart = locale.weekStart;
                config.weekEnd = calcEndOfWeek(locale.weekStart);
            }
        }
    }
    if (inOpts.format) {
        var hasToDisplay = typeof inOpts.format.toDisplay === 'function';
        var hasToValue = typeof inOpts.format.toValue === 'function';
        var validFormatString = date_format_js_1.reFormatTokens.test(inOpts.format);
        if ((hasToDisplay && hasToValue) || validFormatString) {
            format = config.format = inOpts.format;
        }
        delete inOpts.format;
    }
    //*** dates ***//
    // while min and maxDate for "no limit" in the options are better to be null
    // (especially when updating), the ones in the config have to be undefined
    // because null is treated as 0 (= unix epoch) when comparing with time value
    var minDt = minDate;
    var maxDt = maxDate;
    if (inOpts.minDate !== undefined) {
        minDt = inOpts.minDate === null
            ? date_js_1.dateValue(0, 0, 1) // set 0000-01-01 to prevent negative values for year
            : validateDate(inOpts.minDate, format, locale, minDt);
        delete inOpts.minDate;
    }
    if (inOpts.maxDate !== undefined) {
        maxDt = inOpts.maxDate === null
            ? undefined
            : validateDate(inOpts.maxDate, format, locale, maxDt);
        delete inOpts.maxDate;
    }
    if (maxDt < minDt) {
        minDate = config.minDate = maxDt;
        maxDate = config.maxDate = minDt;
    }
    else {
        if (minDate !== minDt) {
            minDate = config.minDate = minDt;
        }
        if (maxDate !== maxDt) {
            maxDate = config.maxDate = maxDt;
        }
    }
    if (inOpts.datesDisabled) {
        config.datesDisabled = inOpts.datesDisabled.reduce(function (dates, dt) {
            var date = date_format_js_1.parseDate(dt, format, locale);
            return date !== undefined ? utils_js_1.pushUnique(dates, date) : dates;
        }, []);
        delete inOpts.datesDisabled;
    }
    if (inOpts.defaultViewDate !== undefined) {
        var viewDate = date_format_js_1.parseDate(inOpts.defaultViewDate, format, locale);
        if (viewDate !== undefined) {
            config.defaultViewDate = viewDate;
        }
        delete inOpts.defaultViewDate;
    }
    //*** days of week ***//
    if (inOpts.weekStart !== undefined) {
        var wkStart = Number(inOpts.weekStart) % 7;
        if (!isNaN(wkStart)) {
            weekStart = config.weekStart = wkStart;
            config.weekEnd = calcEndOfWeek(wkStart);
        }
        delete inOpts.weekStart;
    }
    if (inOpts.daysOfWeekDisabled) {
        config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekDisabled;
    }
    if (inOpts.daysOfWeekHighlighted) {
        config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekHighlighted;
    }
    //*** multi date ***//
    if (inOpts.maxNumberOfDates !== undefined) {
        var maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
        if (maxNumberOfDates >= 0) {
            config.maxNumberOfDates = maxNumberOfDates;
            config.multidate = maxNumberOfDates !== 1;
        }
        delete inOpts.maxNumberOfDates;
    }
    if (inOpts.dateDelimiter) {
        config.dateDelimiter = String(inOpts.dateDelimiter);
        delete inOpts.dateDelimiter;
    }
    //*** view mode ***//
    var newMaxView = maxView;
    if (inOpts.maxView !== undefined) {
        newMaxView = validateViewId(inOpts.maxView, maxView);
        delete inOpts.maxView;
    }
    if (newMaxView !== maxView) {
        maxView = config.maxView = newMaxView;
    }
    var newStartView = startView;
    if (inOpts.startView !== undefined) {
        newStartView = validateViewId(inOpts.startView, newStartView);
        delete inOpts.startView;
    }
    // ensure start view < max
    newStartView = maxView < newStartView ? maxView : newStartView;
    if (newStartView !== startView) {
        config.startView = newStartView;
    }
    //*** template ***//
    if (inOpts.prevArrow) {
        var prevArrow = dom_js_1.parseHTML(inOpts.prevArrow);
        if (prevArrow.childNodes.length > 0) {
            config.prevArrow = prevArrow.childNodes;
        }
        delete inOpts.prevArrow;
    }
    if (inOpts.nextArrow) {
        var nextArrow = dom_js_1.parseHTML(inOpts.nextArrow);
        if (nextArrow.childNodes.length > 0) {
            config.nextArrow = nextArrow.childNodes;
        }
        delete inOpts.nextArrow;
    }
    //*** misc ***//
    if (inOpts.disableTouchKeyboard !== undefined) {
        config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
        delete inOpts.disableTouchKeyboard;
    }
    if (inOpts.orientation) {
        var orientation_1 = inOpts.orientation.toLowerCase().split(/\s+/g);
        config.orientation = {
            x: orientation_1.find(function (x) { return (x === 'left' || x === 'right'); }) || 'auto',
            y: orientation_1.find(function (y) { return (y === 'top' || y === 'bottom'); }) || 'auto'
        };
        delete inOpts.orientation;
    }
    if (inOpts.todayBtnMode !== undefined) {
        switch (inOpts.todayBtnMode) {
            case 0:
            case 1:
                config.todayBtnMode = inOpts.todayBtnMode;
        }
        delete inOpts.todayBtnMode;
    }
    //*** copy the rest ***//
    Object.keys(inOpts).forEach(function (key) {
        if (inOpts[key] !== undefined && utils_js_1.hasProperty(defaultOptions_js_1["default"], key)) {
            config[key] = inOpts[key];
        }
    });
    return config;
}
exports["default"] = processOptions;

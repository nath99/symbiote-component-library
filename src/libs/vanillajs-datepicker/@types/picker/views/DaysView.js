"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var date_js_1 = require("../../lib/date.js");
var date_format_js_1 = require("../../lib/date-format.js");
var dom_js_1 = require("../../lib/dom.js");
var daysTemplate_js_1 = require("../templates/daysTemplate.js");
var calendarWeeksTemplate_js_1 = require("../templates/calendarWeeksTemplate.js");
var View_js_1 = require("./View.js");
var DaysView = /** @class */ (function (_super) {
    __extends(DaysView, _super);
    function DaysView(picker) {
        return _super.call(this, picker, {
            id: 0,
            name: 'days',
            cellClass: 'day'
        }) || this;
    }
    DaysView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            var inner = dom_js_1.parseHTML(daysTemplate_js_1["default"]).firstChild;
            this.dow = inner.firstChild;
            this.grid = inner.lastChild;
            this.element.appendChild(inner);
        }
        _super.prototype.init.call(this, options);
    };
    DaysView.prototype.setOptions = function (options) {
        var _this = this;
        var updateDOW;
        if (utils_js_1.hasProperty(options, 'minDate')) {
            this.minDate = options.minDate;
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            this.maxDate = options.maxDate;
        }
        if (options.datesDisabled) {
            this.datesDisabled = options.datesDisabled;
        }
        if (options.daysOfWeekDisabled) {
            this.daysOfWeekDisabled = options.daysOfWeekDisabled;
            updateDOW = true;
        }
        if (options.daysOfWeekHighlighted) {
            this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
        }
        if (options.todayHighlight !== undefined) {
            this.todayHighlight = options.todayHighlight;
        }
        if (options.weekStart !== undefined) {
            this.weekStart = options.weekStart;
            this.weekEnd = options.weekEnd;
            updateDOW = true;
        }
        if (options.locale) {
            var locale = this.locale = options.locale;
            this.dayNames = locale.daysMin;
            this.switchLabelFormat = locale.titleFormat;
            this.switchLabel = date_format_js_1.formatDate(this.picker.viewDate, locale.titleFormat, locale);
            updateDOW = true;
        }
        if (options.beforeShowDay !== undefined) {
            this.beforeShow = typeof options.beforeShowDay === 'function'
                ? options.beforeShowDay
                : undefined;
        }
        if (options.calendarWeeks !== undefined) {
            if (options.calendarWeeks && !this.calendarWeeks) {
                var weeksElem = dom_js_1.parseHTML(calendarWeeksTemplate_js_1["default"]).firstChild;
                this.calendarWeeks = {
                    element: weeksElem,
                    dow: weeksElem.firstChild,
                    weeks: weeksElem.lastChild
                };
                this.element.insertBefore(weeksElem, this.element.firstChild);
            }
            else if (this.calendarWeeks && !options.calendarWeeks) {
                this.element.removeChild(this.calendarWeeks.element);
                this.calendarWeeks = null;
            }
        }
        if (options.showDaysOfWeek !== undefined) {
            if (options.showDaysOfWeek) {
                dom_js_1.showElement(this.dow);
                if (this.calendarWeeks) {
                    dom_js_1.showElement(this.calendarWeeks.dow);
                }
            }
            else {
                dom_js_1.hideElement(this.dow);
                if (this.calendarWeeks) {
                    dom_js_1.hideElement(this.calendarWeeks.dow);
                }
            }
        }
        // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
        if (updateDOW) {
            Array.from(this.dow.children).forEach(function (el, index) {
                var dow = (_this.weekStart + index) % 7;
                el.textContent = _this.dayNames[dow];
                el.className = _this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
            });
        }
    };
    // Apply update on the focused date to view's settings
    DaysView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        var viewYear = viewDate.getFullYear();
        var viewMonth = viewDate.getMonth();
        var firstOfMonth = date_js_1.dateValue(viewYear, viewMonth, 1);
        var start = date_js_1.dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);
        this.first = firstOfMonth;
        this.last = date_js_1.dateValue(viewYear, viewMonth + 1, 0);
        this.start = start;
        this.switchLabel = date_format_js_1.formatDate(viewDate, this.switchLabelFormat, this.locale);
        this.focused = this.picker.viewDate;
    };
    // Apply update on the selected dates to view's settings
    DaysView.prototype.updateSelection = function () {
        var _a = this.picker.datepicker, dates = _a.dates, range = _a.range;
        this.selected = dates;
        this.range = range;
    };
    // Update the entire view UI
    DaysView.prototype.render = function () {
        var _this = this;
        // update today marker on ever render
        this.today = this.todayHighlight ? date_js_1.today() : undefined;
        // refresh disabled dates on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = __spreadArray([], this.datesDisabled);
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.first <= this.minDate);
        this.picker.setNextBtnDisabled(this.last >= this.maxDate);
        if (this.calendarWeeks) {
            // start of the UTC week (Monday) of the 1st of the month
            var startOfWeek_1 = date_js_1.dayOfTheWeekOf(this.first, 1, 1);
            Array.from(this.calendarWeeks.weeks.children).forEach(function (el, index) {
                el.textContent = date_js_1.getWeek(date_js_1.addWeeks(startOfWeek_1, index));
            });
        }
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            var current = date_js_1.addDays(_this.start, index);
            var date = new Date(current);
            var day = date.getDay();
            el.className = "datepicker-cell " + _this.cellClass;
            el.dataset.date = current;
            el.textContent = date.getDate();
            if (current < _this.first) {
                classList.add('prev');
            }
            else if (current > _this.last) {
                classList.add('next');
            }
            if (_this.today === current) {
                classList.add('today');
            }
            if (current < _this.minDate || current > _this.maxDate || _this.disabled.includes(current)) {
                classList.add('disabled');
            }
            if (_this.daysOfWeekDisabled.includes(day)) {
                classList.add('disabled');
                utils_js_1.pushUnique(_this.disabled, current);
            }
            if (_this.daysOfWeekHighlighted.includes(day)) {
                classList.add('highlighted');
            }
            if (_this.range) {
                var _a = _this.range, rangeStart = _a[0], rangeEnd = _a[1];
                if (current > rangeStart && current < rangeEnd) {
                    classList.add('range');
                }
                if (current === rangeStart) {
                    classList.add('range-start');
                }
                if (current === rangeEnd) {
                    classList.add('range-end');
                }
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, current, current);
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    DaysView.prototype.refresh = function () {
        var _this = this;
        var _a = this.range || [], rangeStart = _a[0], rangeEnd = _a[1];
        this.grid
            .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
            .forEach(function (el) {
            el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el) {
            var current = Number(el.dataset.date);
            var classList = el.classList;
            if (current > rangeStart && current < rangeEnd) {
                classList.add('range');
            }
            if (current === rangeStart) {
                classList.add('range-start');
            }
            if (current === rangeEnd) {
                classList.add('range-end');
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    DaysView.prototype.refreshFocus = function () {
        var index = Math.round((this.focused - this.start) / 86400000);
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
    };
    return DaysView;
}(View_js_1["default"]));
exports["default"] = DaysView;

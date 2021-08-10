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
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var date_js_1 = require("../../lib/date.js");
var dom_js_1 = require("../../lib/dom.js");
var View_js_1 = require("./View.js");
var MonthsView = /** @class */ (function (_super) {
    __extends(MonthsView, _super);
    function MonthsView(picker) {
        return _super.call(this, picker, {
            id: 1,
            name: 'months',
            cellClass: 'month'
        }) || this;
    }
    MonthsView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            this.grid = this.element;
            this.element.classList.add('months', 'datepicker-grid');
            this.grid.appendChild(dom_js_1.parseHTML(utils_js_1.createTagRepeat('span', 12, { 'data-month': function (ix) { return ix; } })));
        }
        _super.prototype.init.call(this, options);
    };
    MonthsView.prototype.setOptions = function (options) {
        if (options.locale) {
            this.monthNames = options.locale.monthsShort;
        }
        if (utils_js_1.hasProperty(options, 'minDate')) {
            if (options.minDate === undefined) {
                this.minYear = this.minMonth = this.minDate = undefined;
            }
            else {
                var minDateObj = new Date(options.minDate);
                this.minYear = minDateObj.getFullYear();
                this.minMonth = minDateObj.getMonth();
                this.minDate = minDateObj.setDate(1);
            }
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            if (options.maxDate === undefined) {
                this.maxYear = this.maxMonth = this.maxDate = undefined;
            }
            else {
                var maxDateObj = new Date(options.maxDate);
                this.maxYear = maxDateObj.getFullYear();
                this.maxMonth = maxDateObj.getMonth();
                this.maxDate = date_js_1.dateValue(this.maxYear, this.maxMonth + 1, 0);
            }
        }
        if (options.beforeShowMonth !== undefined) {
            this.beforeShow = typeof options.beforeShowMonth === 'function'
                ? options.beforeShowMonth
                : undefined;
        }
    };
    // Update view's settings to reflect the viewDate set on the picker
    MonthsView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        this.year = viewDate.getFullYear();
        this.switchLabel = this.year;
        this.focused = viewDate.getMonth();
    };
    // Update view's settings to reflect the selected dates
    MonthsView.prototype.updateSelection = function () {
        this.selected = this.picker.datepicker.dates.reduce(function (selected, timeValue) {
            var date = new Date(timeValue);
            var year = date.getFullYear();
            var month = date.getMonth();
            if (selected[year] === undefined) {
                selected[year] = [month];
            }
            else {
                utils_js_1.pushUnique(selected[year], month);
            }
            return selected;
        }, {});
    };
    // Update the entire view UI
    MonthsView.prototype.render = function () {
        var _this = this;
        // refresh disabled months on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.year <= this.minYear);
        this.picker.setNextBtnDisabled(this.year >= this.maxYear);
        var selected = this.selected[this.year] || [];
        var yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
        var isMinYear = this.year === this.minYear;
        var isMaxYear = this.year === this.maxYear;
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            el.className = "datepicker-cell " + _this.cellClass;
            // reset text on every render to clear the custom content set
            // by beforeShow hook at previous render
            el.textContent = _this.monthNames[index];
            if (yrOutOfRange
                || isMinYear && index < _this.minMonth
                || isMaxYear && index > _this.maxMonth) {
                classList.add('disabled');
            }
            if (selected.includes(index)) {
                classList.add('selected');
            }
            if (index === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, index, date_js_1.dateValue(_this.year, index, 1));
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    MonthsView.prototype.refresh = function () {
        var _this = this;
        var selected = this.selected[this.year] || [];
        this.grid.querySelectorAll('.selected, .focused').forEach(function (el) {
            el.classList.remove('selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            if (selected.includes(index)) {
                classList.add('selected');
            }
            if (index === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    MonthsView.prototype.refreshFocus = function () {
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[this.focused].classList.add('focused');
    };
    return MonthsView;
}(View_js_1["default"]));
exports["default"] = MonthsView;

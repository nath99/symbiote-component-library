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
var dom_js_1 = require("../../lib/dom.js");
var View_js_1 = require("./View.js");
function toTitleCase(word) {
    return __spreadArray([], word).reduce(function (str, ch, ix) { return str += ix ? ch : ch.toUpperCase(); }, '');
}
// Class representing the years and decades view elements
var YearsView = /** @class */ (function (_super) {
    __extends(YearsView, _super);
    function YearsView(picker, config) {
        return _super.call(this, picker, config) || this;
    }
    YearsView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            this.navStep = this.step * 10;
            this.beforeShowOption = "beforeShow" + toTitleCase(this.cellClass);
            this.grid = this.element;
            this.element.classList.add(this.name, 'datepicker-grid');
            this.grid.appendChild(dom_js_1.parseHTML(utils_js_1.createTagRepeat('span', 12)));
        }
        _super.prototype.init.call(this, options);
    };
    YearsView.prototype.setOptions = function (options) {
        if (utils_js_1.hasProperty(options, 'minDate')) {
            if (options.minDate === undefined) {
                this.minYear = this.minDate = undefined;
            }
            else {
                this.minYear = date_js_1.startOfYearPeriod(options.minDate, this.step);
                this.minDate = date_js_1.dateValue(this.minYear, 0, 1);
            }
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            if (options.maxDate === undefined) {
                this.maxYear = this.maxDate = undefined;
            }
            else {
                this.maxYear = date_js_1.startOfYearPeriod(options.maxDate, this.step);
                this.maxDate = date_js_1.dateValue(this.maxYear, 11, 31);
            }
        }
        if (options[this.beforeShowOption] !== undefined) {
            var beforeShow = options[this.beforeShowOption];
            this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
        }
    };
    // Update view's settings to reflect the viewDate set on the picker
    YearsView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        var first = date_js_1.startOfYearPeriod(viewDate, this.navStep);
        var last = first + 9 * this.step;
        this.first = first;
        this.last = last;
        this.start = first - this.step;
        this.switchLabel = first + "-" + last;
        this.focused = date_js_1.startOfYearPeriod(viewDate, this.step);
    };
    // Update view's settings to reflect the selected dates
    YearsView.prototype.updateSelection = function () {
        var _this = this;
        this.selected = this.picker.datepicker.dates.reduce(function (years, timeValue) {
            return utils_js_1.pushUnique(years, date_js_1.startOfYearPeriod(timeValue, _this.step));
        }, []);
    };
    // Update the entire view UI
    YearsView.prototype.render = function () {
        var _this = this;
        // refresh disabled years on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.first <= this.minYear);
        this.picker.setNextBtnDisabled(this.last >= this.maxYear);
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            var current = _this.start + (index * _this.step);
            el.className = "datepicker-cell " + _this.cellClass;
            el.textContent = el.dataset.year = current;
            if (index === 0) {
                classList.add('prev');
            }
            else if (index === 11) {
                classList.add('next');
            }
            if (current < _this.minYear || current > _this.maxYear) {
                classList.add('disabled');
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, current, date_js_1.dateValue(current, 0, 1));
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    YearsView.prototype.refresh = function () {
        var _this = this;
        this.grid.querySelectorAll('.selected, .focused').forEach(function (el) {
            el.classList.remove('selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el) {
            var current = Number(el.textContent);
            var classList = el.classList;
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    YearsView.prototype.refreshFocus = function () {
        var index = Math.round((this.focused - this.start) / this.step);
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
    };
    return YearsView;
}(View_js_1["default"]));
exports["default"] = YearsView;

"use strict";
exports.__esModule = true;
var utils_js_1 = require("../lib/utils.js");
var date_js_1 = require("../lib/date.js");
var dom_js_1 = require("../lib/dom.js");
var event_js_1 = require("../lib/event.js");
var pickerTemplate_js_1 = require("./templates/pickerTemplate.js");
var DaysView_js_1 = require("./views/DaysView.js");
var MonthsView_js_1 = require("./views/MonthsView.js");
var YearsView_js_1 = require("./views/YearsView.js");
var functions_js_1 = require("../events/functions.js");
var pickerListeners_js_1 = require("../events/pickerListeners.js");
function processPickerOptions(picker, options) {
    if (options.title !== undefined) {
        if (options.title) {
            picker.controls.title.textContent = options.title;
            dom_js_1.showElement(picker.controls.title);
        }
        else {
            picker.controls.title.textContent = '';
            dom_js_1.hideElement(picker.controls.title);
        }
    }
    if (options.prevArrow) {
        var prevBtn_1 = picker.controls.prevBtn;
        dom_js_1.emptyChildNodes(prevBtn_1);
        options.prevArrow.forEach(function (node) {
            prevBtn_1.appendChild(node.cloneNode(true));
        });
    }
    if (options.nextArrow) {
        var nextBtn_1 = picker.controls.nextBtn;
        dom_js_1.emptyChildNodes(nextBtn_1);
        options.nextArrow.forEach(function (node) {
            nextBtn_1.appendChild(node.cloneNode(true));
        });
    }
    if (options.locale) {
        picker.controls.todayBtn.textContent = options.locale.today;
        picker.controls.clearBtn.textContent = options.locale.clear;
    }
    if (options.todayBtn !== undefined) {
        if (options.todayBtn) {
            dom_js_1.showElement(picker.controls.todayBtn);
        }
        else {
            dom_js_1.hideElement(picker.controls.todayBtn);
        }
    }
    if (utils_js_1.hasProperty(options, 'minDate') || utils_js_1.hasProperty(options, 'maxDate')) {
        var _a = picker.datepicker.config, minDate = _a.minDate, maxDate = _a.maxDate;
        picker.controls.todayBtn.disabled = !utils_js_1.isInRange(date_js_1.today(), minDate, maxDate);
    }
    if (options.clearBtn !== undefined) {
        if (options.clearBtn) {
            dom_js_1.showElement(picker.controls.clearBtn);
        }
        else {
            dom_js_1.hideElement(picker.controls.clearBtn);
        }
    }
}
// Compute view date to reset, which will be...
// - the last item of the selected dates or defaultViewDate if no selection
// - limitted to minDate or maxDate if it exceeds the range
function computeResetViewDate(datepicker) {
    var dates = datepicker.dates, config = datepicker.config;
    var viewDate = dates.length > 0 ? utils_js_1.lastItemOf(dates) : config.defaultViewDate;
    return utils_js_1.limitToRange(viewDate, config.minDate, config.maxDate);
}
// Change current view's view date
function setViewDate(picker, newDate) {
    var oldViewDate = new Date(picker.viewDate);
    var newViewDate = new Date(newDate);
    var _a = picker.currentView, id = _a.id, year = _a.year, first = _a.first, last = _a.last;
    var viewYear = newViewDate.getFullYear();
    picker.viewDate = newDate;
    if (viewYear !== oldViewDate.getFullYear()) {
        functions_js_1.triggerDatepickerEvent(picker.datepicker, 'changeYear');
    }
    if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
        functions_js_1.triggerDatepickerEvent(picker.datepicker, 'changeMonth');
    }
    // return whether the new date is in different period on time from the one
    // displayed in the current view
    // when true, the view needs to be re-rendered on the next UI refresh.
    switch (id) {
        case 0:
            return newDate < first || newDate > last;
        case 1:
            return viewYear !== year;
        default:
            return viewYear < first || viewYear > last;
    }
}
function getTextDirection(el) {
    return window.getComputedStyle(el).direction;
}
// Class representing the picker UI
var Picker = /** @class */ (function () {
    function Picker(datepicker) {
        this.datepicker = datepicker;
        var template = pickerTemplate_js_1["default"].replace(/%buttonClass%/g, datepicker.config.buttonClass);
        var element = this.element = dom_js_1.parseHTML(template).firstChild;
        var _a = element.firstChild.children, header = _a[0], main = _a[1], footer = _a[2];
        var title = header.firstElementChild;
        var _b = header.lastElementChild.children, prevBtn = _b[0], viewSwitch = _b[1], nextBtn = _b[2];
        var _c = footer.firstChild.children, todayBtn = _c[0], clearBtn = _c[1];
        var controls = {
            title: title,
            prevBtn: prevBtn,
            viewSwitch: viewSwitch,
            nextBtn: nextBtn,
            todayBtn: todayBtn,
            clearBtn: clearBtn
        };
        this.main = main;
        this.controls = controls;
        var elementClass = datepicker.inline ? 'inline' : 'dropdown';
        element.classList.add("datepicker-" + elementClass);
        processPickerOptions(this, datepicker.config);
        this.viewDate = computeResetViewDate(datepicker);
        // set up event listeners
        event_js_1.registerListeners(datepicker, [
            [element, 'click', pickerListeners_js_1.onClickPicker.bind(null, datepicker)],
            [main, 'click', pickerListeners_js_1.onClickView.bind(null, datepicker)],
            [controls.viewSwitch, 'click', pickerListeners_js_1.onClickViewSwitch.bind(null, datepicker)],
            [controls.prevBtn, 'click', pickerListeners_js_1.onClickPrevBtn.bind(null, datepicker)],
            [controls.nextBtn, 'click', pickerListeners_js_1.onClickNextBtn.bind(null, datepicker)],
            [controls.todayBtn, 'click', pickerListeners_js_1.onClickTodayBtn.bind(null, datepicker)],
            [controls.clearBtn, 'click', pickerListeners_js_1.onClickClearBtn.bind(null, datepicker)],
        ]);
        // set up views
        this.views = [
            new DaysView_js_1["default"](this),
            new MonthsView_js_1["default"](this),
            new YearsView_js_1["default"](this, { id: 2, name: 'years', cellClass: 'year', step: 1 }),
            new YearsView_js_1["default"](this, { id: 3, name: 'decades', cellClass: 'decade', step: 10 }),
        ];
        this.currentView = this.views[datepicker.config.startView];
        this.currentView.render();
        this.main.appendChild(this.currentView.element);
        datepicker.config.container.appendChild(this.element);
    }
    Picker.prototype.setOptions = function (options) {
        processPickerOptions(this, options);
        this.views.forEach(function (view) {
            view.init(options, false);
        });
        this.currentView.render();
    };
    Picker.prototype.detach = function () {
        this.datepicker.config.container.removeChild(this.element);
    };
    Picker.prototype.show = function () {
        if (this.active) {
            return;
        }
        this.element.classList.add('active');
        this.active = true;
        var datepicker = this.datepicker;
        if (!datepicker.inline) {
            // ensure picker's direction matches input's
            var inputDirection = getTextDirection(datepicker.inputField);
            if (inputDirection !== getTextDirection(datepicker.config.container)) {
                this.element.dir = inputDirection;
            }
            else if (this.element.dir) {
                this.element.removeAttribute('dir');
            }
            this.place();
            if (datepicker.config.disableTouchKeyboard) {
                datepicker.inputField.blur();
            }
        }
        functions_js_1.triggerDatepickerEvent(datepicker, 'show');
    };
    Picker.prototype.hide = function () {
        if (!this.active) {
            return;
        }
        this.datepicker.exitEditMode();
        this.element.classList.remove('active');
        this.active = false;
        functions_js_1.triggerDatepickerEvent(this.datepicker, 'hide');
    };
    Picker.prototype.place = function () {
        var _a = this.element, classList = _a.classList, style = _a.style;
        var _b = this.datepicker, config = _b.config, inputField = _b.inputField;
        var container = config.container;
        var _c = this.element.getBoundingClientRect(), calendarWidth = _c.width, calendarHeight = _c.height;
        var _d = container.getBoundingClientRect(), containerLeft = _d.left, containerTop = _d.top, containerWidth = _d.width;
        var _e = inputField.getBoundingClientRect(), inputLeft = _e.left, inputTop = _e.top, inputWidth = _e.width, inputHeight = _e.height;
        var _f = config.orientation, orientX = _f.x, orientY = _f.y;
        var scrollTop;
        var left;
        var top;
        if (container === document.body) {
            scrollTop = window.scrollY;
            left = inputLeft + window.scrollX;
            top = inputTop + scrollTop;
        }
        else {
            scrollTop = container.scrollTop;
            left = inputLeft - containerLeft;
            top = inputTop - containerTop + scrollTop;
        }
        if (orientX === 'auto') {
            if (left < 0) {
                // align to the left and move into visible area if input's left edge < window's
                orientX = 'left';
                left = 10;
            }
            else if (left + calendarWidth > containerWidth) {
                // align to the right if canlendar's right edge > container's
                orientX = 'right';
            }
            else {
                orientX = getTextDirection(inputField) === 'rtl' ? 'right' : 'left';
            }
        }
        if (orientX === 'right') {
            left -= calendarWidth - inputWidth;
        }
        if (orientY === 'auto') {
            orientY = top - calendarHeight < scrollTop ? 'bottom' : 'top';
        }
        if (orientY === 'top') {
            top -= calendarHeight;
        }
        else {
            top += inputHeight;
        }
        classList.remove('datepicker-orient-top', 'datepicker-orient-bottom', 'datepicker-orient-right', 'datepicker-orient-left');
        classList.add("datepicker-orient-" + orientY, "datepicker-orient-" + orientX);
        style.top = top ? top + "px" : top;
        style.left = left ? left + "px" : left;
    };
    Picker.prototype.setViewSwitchLabel = function (labelText) {
        this.controls.viewSwitch.textContent = labelText;
    };
    Picker.prototype.setPrevBtnDisabled = function (disabled) {
        this.controls.prevBtn.disabled = disabled;
    };
    Picker.prototype.setNextBtnDisabled = function (disabled) {
        this.controls.nextBtn.disabled = disabled;
    };
    Picker.prototype.changeView = function (viewId) {
        var oldView = this.currentView;
        var newView = this.views[viewId];
        if (newView.id !== oldView.id) {
            this.currentView = newView;
            this._renderMethod = 'render';
            functions_js_1.triggerDatepickerEvent(this.datepicker, 'changeView');
            this.main.replaceChild(newView.element, oldView.element);
        }
        return this;
    };
    // Change the focused date (view date)
    Picker.prototype.changeFocus = function (newViewDate) {
        this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
        this.views.forEach(function (view) {
            view.updateFocus();
        });
        return this;
    };
    // Apply the change of the selected dates
    Picker.prototype.update = function () {
        var newViewDate = computeResetViewDate(this.datepicker);
        this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
        this.views.forEach(function (view) {
            view.updateFocus();
            view.updateSelection();
        });
        return this;
    };
    // Refresh the picker UI
    Picker.prototype.render = function () {
        var renderMethod = this._renderMethod || 'render';
        delete this._renderMethod;
        this.currentView[renderMethod]();
    };
    return Picker;
}());
exports["default"] = Picker;

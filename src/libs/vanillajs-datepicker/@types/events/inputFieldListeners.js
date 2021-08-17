"use strict";
exports.__esModule = true;
exports.onPaste = exports.onClickInput = exports.onMousedown = exports.onFocus = exports.onKeydown = void 0;
var utils_js_1 = require("../lib/utils.js");
var date_js_1 = require("../lib/date.js");
var functions_js_1 = require("./functions.js");
// Find the closest date that doesn't meet the condition for unavailable date
// Returns undefined if no available date is found
// addFn: function to calculate the next date
//   - args: time value, amount
// increase: amount to pass to addFn
// testFn: function to test the unavailablity of the date
//   - args: time value; retun: true if unavailable
function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
    if (!utils_js_1.isInRange(date, min, max)) {
        return;
    }
    if (testFn(date)) {
        var newDate = addFn(date, increase);
        return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
    }
    return date;
}
// direction: -1 (left/up), 1 (right/down)
// vertical: true for up/down, false for left/right
function moveByArrowKey(datepicker, ev, direction, vertical) {
    var currentView = datepicker.picker.currentView;
    var step = currentView.step || 1;
    var viewDate = datepicker.picker.viewDate;
    var addFn;
    var testFn;
    switch (currentView.id) {
        case 0:
            if (vertical) {
                viewDate = date_js_1.addDays(viewDate, direction * 7);
            }
            else if (ev.ctrlKey || ev.metaKey) {
                viewDate = date_js_1.addYears(viewDate, direction);
            }
            else {
                viewDate = date_js_1.addDays(viewDate, direction);
            }
            addFn = date_js_1.addDays;
            testFn = function (date) { return currentView.disabled.includes(date); };
            break;
        case 1:
            viewDate = date_js_1.addMonths(viewDate, vertical ? direction * 4 : direction);
            addFn = date_js_1.addMonths;
            testFn = function (date) {
                var dt = new Date(date);
                var year = currentView.year, disabled = currentView.disabled;
                return dt.getFullYear() === year && disabled.includes(dt.getMonth());
            };
            break;
        default:
            viewDate = date_js_1.addYears(viewDate, direction * (vertical ? 4 : 1) * step);
            addFn = date_js_1.addYears;
            testFn = function (date) { return currentView.disabled.includes(date_js_1.startOfYearPeriod(date, step)); };
    }
    viewDate = findNextAvailableOne(viewDate, addFn, direction < 0 ? -step : step, testFn, currentView.minDate, currentView.maxDate);
    if (viewDate !== undefined) {
        datepicker.picker.changeFocus(viewDate).render();
    }
}
function onKeydown(datepicker, ev) {
    if (ev.key === 'Tab') {
        datepicker.refresh('input');
        datepicker.hide();
        return;
    }
    var viewId = datepicker.picker.currentView.id;
    if (!datepicker.picker.active) {
        switch (ev.key) {
            case 'ArrowDown':
            case 'Escape':
                datepicker.picker.show();
                break;
            case 'Enter':
                datepicker.update();
                break;
            default:
                return;
        }
    }
    else if (datepicker.editMode) {
        switch (ev.key) {
            case 'Escape':
                datepicker.exitEditMode();
                break;
            case 'Enter':
                datepicker.exitEditMode({ update: true, autohide: datepicker.config.autohide });
                break;
            default:
                return;
        }
    }
    else {
        switch (ev.key) {
            case 'Escape':
                if (ev.shiftKey) {
                    datepicker.enterEditMode();
                }
                else {
                    datepicker.picker.hide();
                }
                break;
            case 'ArrowLeft':
                if (ev.ctrlKey || ev.metaKey) {
                    functions_js_1.goToPrevOrNext(datepicker, -1);
                }
                else {
                    moveByArrowKey(datepicker, ev, -1, false);
                }
                break;
            case 'ArrowRight':
                if (ev.ctrlKey || ev.metaKey) {
                    functions_js_1.goToPrevOrNext(datepicker, 1);
                }
                else {
                    moveByArrowKey(datepicker, ev, 1, false);
                }
                break;
            case 'ArrowUp':
                if (ev.ctrlKey || ev.metaKey) {
                    functions_js_1.switchView(datepicker);
                }
                else {
                    moveByArrowKey(datepicker, ev, -1, true);
                }
                break;
            case 'ArrowDown':
                moveByArrowKey(datepicker, ev, 1, true);
                break;
            case 'Enter':
                if (viewId === 0) {
                    datepicker.setDate(datepicker.picker.viewDate);
                }
                else {
                    datepicker.picker.changeView(viewId - 1).render();
                }
                break;
            case 'Backspace':
            case 'Delete':
                datepicker.enterEditMode();
                return;
            default:
                if (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey) {
                    datepicker.enterEditMode();
                }
                return;
        }
    }
    ev.preventDefault();
    ev.stopPropagation();
}
exports.onKeydown = onKeydown;
function onFocus(datepicker) {
    if (datepicker.config.showOnFocus) {
        datepicker.show();
    }
}
exports.onFocus = onFocus;
// for the prevention for entering edit mode while getting focus on click
function onMousedown(datepicker, ev) {
    var el = ev.target;
    if (datepicker.picker.active) {
        el._clicking = setTimeout(function () {
            delete el._clicking;
        }, 2000);
    }
}
exports.onMousedown = onMousedown;
function onClickInput(datepicker, ev) {
    var el = ev.target;
    if (!el._clicking) {
        return;
    }
    clearTimeout(el._clicking);
    delete el._clicking;
    datepicker.enterEditMode();
}
exports.onClickInput = onClickInput;
function onPaste(datepicker, ev) {
    if (ev.clipboardData.types.includes('text/plain')) {
        datepicker.enterEditMode();
    }
}
exports.onPaste = onPaste;

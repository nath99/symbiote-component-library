"use strict";
exports.__esModule = true;
exports.onClickPicker = exports.onClickView = exports.onClickNextBtn = exports.onClickPrevBtn = exports.onClickViewSwitch = exports.onClickClearBtn = exports.onClickTodayBtn = void 0;
var date_js_1 = require("../lib/date.js");
var event_js_1 = require("../lib/event.js");
var functions_js_1 = require("./functions.js");
function goToSelectedMonthOrYear(datepicker, selection) {
    var picker = datepicker.picker;
    var viewDate = new Date(picker.viewDate);
    var viewId = picker.currentView.id;
    var newDate = viewId === 1
        ? date_js_1.addMonths(viewDate, selection - viewDate.getMonth())
        : date_js_1.addYears(viewDate, selection - viewDate.getFullYear());
    picker.changeFocus(newDate).changeView(viewId - 1).render();
}
function onClickTodayBtn(datepicker) {
    var picker = datepicker.picker;
    var currentDate = date_js_1.today();
    if (datepicker.config.todayBtnMode === 1) {
        if (datepicker.config.autohide) {
            datepicker.setDate(currentDate);
            return;
        }
        datepicker.setDate(currentDate, { render: false });
        picker.update();
    }
    if (picker.viewDate !== currentDate) {
        picker.changeFocus(currentDate);
    }
    picker.changeView(0).render();
}
exports.onClickTodayBtn = onClickTodayBtn;
function onClickClearBtn(datepicker) {
    datepicker.setDate({ clear: true });
}
exports.onClickClearBtn = onClickClearBtn;
function onClickViewSwitch(datepicker) {
    functions_js_1.switchView(datepicker);
}
exports.onClickViewSwitch = onClickViewSwitch;
function onClickPrevBtn(datepicker) {
    functions_js_1.goToPrevOrNext(datepicker, -1);
}
exports.onClickPrevBtn = onClickPrevBtn;
function onClickNextBtn(datepicker) {
    functions_js_1.goToPrevOrNext(datepicker, 1);
}
exports.onClickNextBtn = onClickNextBtn;
// For the picker's main block to delegete the events from `datepicker-cell`s
function onClickView(datepicker, ev) {
    var target = event_js_1.findElementInEventPath(ev, '.datepicker-cell');
    if (!target || target.classList.contains('disabled')) {
        return;
    }
    switch (datepicker.picker.currentView.id) {
        case 0:
            datepicker.setDate(Number(target.dataset.date));
            break;
        case 1:
            goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
            break;
        default:
            goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
    }
}
exports.onClickView = onClickView;
function onClickPicker(datepicker, ev) {
    ev.preventDefault();
    ev.stopPropagation();
    // check if the picker is active in order to prevent the picker from being
    // re-shown after auto-hide when showOnFocus: true
    // it's caused by bubbled event from cells/buttons, but the bubbling cannot
    // be disabled because it's needed to keep the focus on the input element
    if (!datepicker.inline && datepicker.picker.active && !datepicker.config.disableTouchKeyboard) {
        datepicker.inputField.focus();
    }
}
exports.onClickPicker = onClickPicker;

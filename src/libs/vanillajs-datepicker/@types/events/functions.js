"use strict";
exports.__esModule = true;
exports.switchView = exports.goToPrevOrNext = exports.triggerDatepickerEvent = void 0;
var utils_js_1 = require("../lib/utils.js");
var date_js_1 = require("../lib/date.js");
function triggerDatepickerEvent(datepicker, type) {
    var detail = {
        date: datepicker.getDate(),
        viewDate: new Date(datepicker.picker.viewDate),
        viewId: datepicker.picker.currentView.id,
        datepicker: datepicker
    };
    datepicker.element.dispatchEvent(new CustomEvent(type, { detail: detail }));
}
exports.triggerDatepickerEvent = triggerDatepickerEvent;
// direction: -1 (to previous), 1 (to next)
function goToPrevOrNext(datepicker, direction) {
    var _a = datepicker.config, minDate = _a.minDate, maxDate = _a.maxDate;
    var _b = datepicker.picker, currentView = _b.currentView, viewDate = _b.viewDate;
    var newViewDate;
    switch (currentView.id) {
        case 0:
            newViewDate = date_js_1.addMonths(viewDate, direction);
            break;
        case 1:
            newViewDate = date_js_1.addYears(viewDate, direction);
            break;
        default:
            newViewDate = date_js_1.addYears(viewDate, direction * currentView.navStep);
    }
    newViewDate = utils_js_1.limitToRange(newViewDate, minDate, maxDate);
    datepicker.picker.changeFocus(newViewDate).render();
}
exports.goToPrevOrNext = goToPrevOrNext;
function switchView(datepicker) {
    var viewId = datepicker.picker.currentView.id;
    if (viewId === datepicker.config.maxView) {
        return;
    }
    datepicker.picker.changeView(viewId + 1).render();
}
exports.switchView = switchView;

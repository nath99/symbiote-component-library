"use strict";
exports.__esModule = true;
exports.onClickOutside = void 0;
var event_js_1 = require("../lib/event.js");
// for the `document` to delegate the events from outside the picker/input field
function onClickOutside(datepicker, ev) {
    var element = datepicker.element;
    var pickerElem = datepicker.picker.element;
    if (event_js_1.findElementInEventPath(ev, function (el) { return el === element || el === pickerElem; })) {
        return;
    }
    datepicker.refresh('input');
    datepicker.hide();
}
exports.onClickOutside = onClickOutside;

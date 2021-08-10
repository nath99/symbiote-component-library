"use strict";
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var pickerTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"datepicker\">\n  <div class=\"datepicker-picker\">\n    <div class=\"datepicker-header\">\n      <div class=\"datepicker-title\"></div>\n      <div class=\"datepicker-controls\">\n        <button class=\"%buttonClass% prev-btn\"></button>\n        <button class=\"%buttonClass% view-switch\"></button>\n        <button class=\"%buttonClass% next-btn\"></button>\n      </div>\n    </div>\n    <div class=\"datepicker-main\"></div>\n    <div class=\"datepicker-footer\">\n      <div class=\"datepicker-controls\">\n        <button class=\"%buttonClass% today-btn\"></button>\n        <button class=\"%buttonClass% clear-btn\"></button>\n      </div>\n    </div>\n  </div>\n</div>");
exports["default"] = pickerTemplate;

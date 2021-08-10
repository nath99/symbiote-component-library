"use strict";
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var daysTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"days\">\n  <div class=\"days-of-week\">" + utils_js_1.createTagRepeat('span', 7, { "class": 'dow' }) + "</div>\n  <div class=\"datepicker-grid\">" + utils_js_1.createTagRepeat('span', 42) + "</div>\n</div>");
exports["default"] = daysTemplate;

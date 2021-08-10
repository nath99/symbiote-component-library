"use strict";
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var calendarWeeksTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"calendar-weeks\">\n  <div class=\"days-of-week\"><span class=\"dow\"></span></div>\n  <div class=\"weeks\">" + utils_js_1.createTagRepeat('span', 6, { "class": 'week' }) + "</div>\n</div>");
exports["default"] = calendarWeeksTemplate;

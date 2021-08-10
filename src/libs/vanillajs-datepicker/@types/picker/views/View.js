"use strict";
exports.__esModule = true;
var utils_js_1 = require("../../lib/utils.js");
var dom_js_1 = require("../../lib/dom.js");
// Base class of the view classes
var View = /** @class */ (function () {
    function View(picker, config) {
        Object.assign(this, config, {
            picker: picker,
            element: dom_js_1.parseHTML("<div class=\"datepicker-view\"></div>").firstChild,
            selected: []
        });
        this.init(this.picker.datepicker.config);
    }
    View.prototype.init = function (options) {
        this.setOptions(options);
        this.updateFocus();
        this.updateSelection();
    };
    // Execute beforeShow() callback and apply the result to the element
    // args:
    // - current - current value on the iteration on view rendering
    // - timeValue - time value of the date to pass to beforeShow()
    View.prototype.performBeforeHook = function (el, current, timeValue) {
        var _a;
        var result = this.beforeShow(new Date(timeValue));
        switch (typeof result) {
            case 'boolean':
                result = { enabled: result };
                break;
            case 'string':
                result = { classes: result };
        }
        if (result) {
            if (result.enabled === false) {
                el.classList.add('disabled');
                utils_js_1.pushUnique(this.disabled, current);
            }
            if (result.classes) {
                var extraClasses = result.classes.split(/\s+/);
                (_a = el.classList).add.apply(_a, extraClasses);
                if (extraClasses.includes('disabled')) {
                    utils_js_1.pushUnique(this.disabled, current);
                }
            }
            if (result.content) {
                dom_js_1.replaceChildNodes(el, result.content);
            }
        }
    };
    return View;
}());
exports["default"] = View;

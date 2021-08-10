"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var utils_js_1 = require("./lib/utils.js");
var date_js_1 = require("./lib/date.js");
var date_format_js_1 = require("./lib/date-format.js");
var event_js_1 = require("./lib/event.js");
var base_locales_js_1 = require("./i18n/base-locales.js");
var defaultOptions_js_1 = require("./options/defaultOptions.js");
var processOptions_js_1 = require("./options/processOptions.js");
var Picker_js_1 = require("./picker/Picker.js");
var functions_js_1 = require("./events/functions.js");
var inputFieldListeners_js_1 = require("./events/inputFieldListeners.js");
var otherListeners_js_1 = require("./events/otherListeners.js");
function stringifyDates(dates, config) {
    return dates
        .map(function (dt) { return date_format_js_1.formatDate(dt, config.format, config.locale); })
        .join(config.dateDelimiter);
}
// parse input dates and create an array of time values for selection
// returns undefined if there are no valid dates in inputDates
// when origDates (current selection) is passed, the function works to mix
// the input dates into the current selection
function processInputDates(inputDates, config, origDates) {
    if (origDates === void 0) { origDates = undefined; }
    if (inputDates.length === 0) {
        // empty input is considered valid unless origiDates is passed
        return origDates ? undefined : [];
    }
    var newDates = inputDates.reduce(function (dates, dt) {
        var date = date_format_js_1.parseDate(dt, config.format, config.locale);
        if (date !== undefined
            && utils_js_1.isInRange(date, config.minDate, config.maxDate)
            && !dates.includes(date)
            && !config.datesDisabled.includes(date)
            && !config.daysOfWeekDisabled.includes(new Date(date).getDay())) {
            dates.push(date);
        }
        return dates;
    }, []);
    if (newDates.length === 0) {
        return;
    }
    if (origDates && config.multidate) {
        // get the synmetric difference between origDates and newDates
        newDates = newDates.reduce(function (dates, date) {
            if (!origDates.includes(date)) {
                dates.push(date);
            }
            return dates;
        }, origDates.filter(function (date) { return !newDates.includes(date); }));
    }
    // do length check always because user can input multiple dates regardless of the mode
    return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates
        ? newDates.slice(config.maxNumberOfDates * -1)
        : newDates;
}
/**
 * Class representing a date picker
 */
var Datepicker = /** @class */ (function () {
    /**
     * Create a date picker
     * @param  {Element} element - element to bind a date picker
     * @param  {Object} [options] - config options
     * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
     * date picker belongs to. Use this only when creating date picker as a part
     * of date range picker
     */
    function Datepicker(element, options, rangepicker) {
        if (options === void 0) { options = {}; }
        if (rangepicker === void 0) { rangepicker = undefined; }
        element.datepicker = this;
        this.element = element;
        // set up config
        var config = this.config = Object.assign({
            buttonClass: (options.buttonClass && String(options.buttonClass)) || 'button',
            container: document.body,
            defaultViewDate: date_js_1.today(),
            maxDate: undefined,
            minDate: undefined
        }, processOptions_js_1["default"](defaultOptions_js_1["default"], this));
        this._options = options;
        Object.assign(config, processOptions_js_1["default"](options, this));
        // configure by type
        var inline = this.inline = element.tagName !== 'INPUT';
        var inputField;
        var initialDates;
        if (inline) {
            config.container = element;
            initialDates = utils_js_1.stringToArray(element.dataset.date, config.dateDelimiter);
            delete element.dataset.date;
        }
        else {
            var container = options.container ? document.querySelector(options.container) : null;
            if (container) {
                config.container = container;
            }
            inputField = this.inputField = element;
            inputField.classList.add('datepicker-input');
            initialDates = utils_js_1.stringToArray(inputField.value, config.dateDelimiter);
        }
        // set initial value
        this.dates = processInputDates(initialDates, config) || [];
        if (rangepicker && rangepicker.constructor.name === 'DateRangePicker') {
            this.rangepicker = rangepicker;
            // add getter for range
            Object.defineProperty(this, 'range', {
                get: function () {
                    return this.rangepicker.dates;
                }
            });
        }
        var picker = this.picker = new Picker_js_1["default"](this);
        if (inline) {
            this.show();
        }
        else {
            // set up event listeners in other modes
            var onMousedownDocument = otherListeners_js_1.onClickOutside.bind(null, this);
            var listeners = [
                [inputField, 'keydown', inputFieldListeners_js_1.onKeydown.bind(null, this)],
                [inputField, 'focus', inputFieldListeners_js_1.onFocus.bind(null, this)],
                [inputField, 'mousedown', inputFieldListeners_js_1.onMousedown.bind(null, this)],
                [inputField, 'click', inputFieldListeners_js_1.onClickInput.bind(null, this)],
                [inputField, 'paste', inputFieldListeners_js_1.onPaste.bind(null, this)],
                [document, 'mousedown', onMousedownDocument],
                [document, 'touchstart', onMousedownDocument],
                [window, 'resize', picker.place.bind(picker)]
            ];
            event_js_1.registerListeners(this, listeners);
        }
    }
    /**
     * Format Date object or time value in given format and language
     * @param  {Date|Number} date - date or time value to format
     * @param  {String|Object} format - format string or object that contains
     * toDisplay() custom formatter, whose signature is
     * - args:
     *   - date: {Date} - Date instance of the date passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {String} formatted date
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {String} formatted date
     */
    Datepicker.formatDate = function (date, format, lang) {
        return date_format_js_1.formatDate(date, format, lang && base_locales_js_1.locales[lang] || base_locales_js_1.locales.en);
    };
    /**
     * Pasre date string
     * @param  {String|Date|Number} dateStr - date string, Date object or time
     * value to parse
     * @param  {String|Object} format - format string or object that contains
     * toValue() custom parser, whose signature is
     * - args:
     *   - dateStr: {String|Date|Number} - the dateStr passed to the method
     *   - format: {Object} - the format object passed to the method
     *   - locale: {Object} - locale for the language specified by `lang`
     * - return:
     *     {Date|Number} parsed date or its time value
     * @param  {String} [lang=en] - language code for the locale to use
     * @return {Number} time value of parsed date
     */
    Datepicker.parseDate = function (dateStr, format, lang) {
        return date_format_js_1.parseDate(dateStr, format, lang && base_locales_js_1.locales[lang] || base_locales_js_1.locales.en);
    };
    Object.defineProperty(Datepicker, "locales", {
        /**
         * @type {Object} - Installed locales in `[languageCode]: localeObject` format
         * en`:_English (US)_ is pre-installed.
         */
        get: function () {
            return base_locales_js_1.locales;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Datepicker.prototype, "active", {
        /**
         * @type {Boolean} - Whether the picker element is shown. `true` whne shown
         */
        get: function () {
            return !!(this.picker && this.picker.active);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
    Datepicker.prototype.setOptions = function (options) {
        var picker = this.picker;
        var newOptions = processOptions_js_1["default"](options, this);
        Object.assign(this._options, options);
        Object.assign(this.config, newOptions);
        picker.setOptions(newOptions);
        var currentViewId = picker.currentView.id;
        if (newOptions.maxView < currentViewId) {
            picker.changeView(newOptions.maxView);
        }
        else if (newOptions.startView !== undefined
            && !picker.active
            && newOptions.startView !== currentViewId) {
            picker.changeView(newOptions.startView);
        }
        this.refresh();
    };
    /**
     * Show the picker element
     */
    Datepicker.prototype.show = function () {
        if (this.inputField && this.inputField.disabled) {
            return;
        }
        this.picker.show();
    };
    /**
     * Hide the picker element
     * Not avilable on inline picker
     */
    Datepicker.prototype.hide = function () {
        if (this.inline) {
            return;
        }
        this.picker.hide();
        this.picker.update().changeView(this.config.startView).render();
    };
    /**
     * Destroy the Datepicker instance
     * @return {Detepicker} - the instance destroyed
     */
    Datepicker.prototype.destroy = function () {
        this.hide();
        event_js_1.unregisterListeners(this);
        this.picker.detach();
        if (!this.inline) {
            this.inputField.classList.remove('datepicker-input');
        }
        delete this.element.datepicker;
        return this;
    };
    /**
     * Get the selected date(s)
     *
     * The method returns a Date object of selected date by default, and returns
     * an array of selected dates in multidate mode. If format string is passed,
     * it returns date string(s) formatted in given format.
     *
     * @param  {String} [format] - Format string to stringify the date(s)
     * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
     * selected, empty array in multidate mode and untitled in sigledate mode
     */
    Datepicker.prototype.getDate = function (format) {
        var _this = this;
        if (format === void 0) { format = undefined; }
        var callback = format
            ? function (date) { return date_format_js_1.formatDate(date, format, _this.config.locale); }
            : function (date) { return new Date(date); };
        if (this.config.multidate) {
            return this.dates.map(callback);
        }
        if (this.dates.length > 0) {
            return callback(this.dates[0]);
        }
    };
    /**
     * Set selected date(s)
     *
     * In multidate mode, you can pass multiple dates as a series of arguments
     * or an array. (Since each date is parsed individually, the type of the
     * dates doesn't have to be the same.)
     * The given dates are used to toggle the select status of each date. The
     * number of selected dates is kept from exceeding the length set to
     * maxNumberOfDates.
     *
     * With clear: true option, the method can be used to clear the selection
     * and to replace the selection instead of toggling in multidate mode.
     * If the option is passed with no date arguments or an empty dates array,
     * it works as "clear" (clear the selection then set nothing), and if the
     * option is passed with new dates to select, it works as "replace" (clear
     * the selection then set the given dates)
     *
     * When render: false option is used, the method omits re-rendering the
     * picker element. In this case, you need to call refresh() method later in
     * order for the picker element to reflect the changes. The input field is
     * refreshed always regardless of this option.
     *
     * When invalid (unparsable, repeated, disabled or out-of-range) dates are
     * passed, the method ignores them and applies only valid ones. In the case
     * that all the given dates are invalid, which is distiguished from passing
     * no dates, the method considers it as an error and leaves the selection
     * untouched.
     *
     * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
     * objects, time values or mix of those for new selection
     * @param {Object} [options] - function options
     * - clear: {boolean} - Whether to clear the existing selection
     *     defualt: false
     * - render: {boolean} - Whether to re-render the picker element
     *     default: true
     * - autohide: {boolean} - Whether to hide the picker element after re-render
     *     Ignored when used with render: false
     *     default: config.autohide
     */
    Datepicker.prototype.setDate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var dates = __spreadArray([], args);
        var opts = { clear: false, render: true, autohide: this.config.autohide };
        var lastArg = utils_js_1.lastItemOf(args);
        if (typeof lastArg === 'object'
            && !Array.isArray(lastArg)
            && !(lastArg instanceof Date)) {
            Object.assign(opts, dates.pop());
        }
        var inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
        var origDates = opts.clear ? undefined : this.dates;
        var newDates = processInputDates(inputDates, this.config, origDates);
        if (!newDates) {
            return;
        }
        if (newDates.toString() !== this.dates.toString()) {
            this.dates = newDates;
            if (opts.render) {
                this.picker.update();
                this.refresh();
            }
            else {
                this.refresh('input');
            }
            functions_js_1.triggerDatepickerEvent(this, 'changeDate');
        }
        else {
            this.refresh('input');
        }
        if (opts.render && opts.autohide) {
            this.hide();
        }
    };
    /**
     * Update the selected date(s) with input field's value
     * Not avilable on inline picker
     *
     * The input field will be refreshed with properly formatted date string.
     *
     * @param  {Object} [options] - function options
     * - autohide: {boolean} - whether to hide the picker element after refresh
     *     default: false
     */
    Datepicker.prototype.update = function (options) {
        if (options === void 0) { options = undefined; }
        if (this.inline) {
            return;
        }
        var opts = Object.assign({ autohide: false }, options);
        var inputDates = utils_js_1.stringToArray(this.inputField.value, this.config.dateDelimiter);
        var newDates = processInputDates(inputDates, this.config);
        if (!newDates) {
            return;
        }
        if (newDates.toString() !== this.dates.toString()) {
            this.dates = newDates;
            this.picker.update();
            this.refresh();
            functions_js_1.triggerDatepickerEvent(this, 'changeDate');
        }
        else {
            this.refresh('input');
        }
        if (opts.autohide) {
            this.hide();
        }
    };
    /**
     * Refresh the picker element and the associated input field
     * @param {String} [target] - target item when refreshing one item only
     * 'picker' or 'input'
     */
    Datepicker.prototype.refresh = function (target) {
        if (target === void 0) { target = undefined; }
        if (target !== 'input') {
            this.picker.render();
        }
        if (!this.inline && target !== 'picker') {
            this.inputField.value = stringifyDates(this.dates, this.config);
        }
    };
    /**
     * Enter edit mode
     * Not avilable on inline picker or when the picker element is hidden
     */
    Datepicker.prototype.enterEditMode = function () {
        if (this.inline || !this.picker.active || this.editMode) {
            return;
        }
        this.editMode = true;
        this.inputField.classList.add('in-edit');
    };
    /**
     * Exit from edit mode
     * Not avilable on inline picker
     * @param  {Object} [options] - function options
     * - update: {boolean} - whether to call update() after exiting
     *     If false, input field is revert to the existing selection
     *     default: false
     */
    Datepicker.prototype.exitEditMode = function (options) {
        if (options === void 0) { options = undefined; }
        if (this.inline || !this.editMode) {
            return;
        }
        var opts = Object.assign({ update: false }, options);
        delete this.editMode;
        this.inputField.classList.remove('in-edit');
        if (opts.update) {
            this.update(opts);
        }
        else {
            this.inputField.value = stringifyDates(this.dates, this.config);
        }
    };
    return Datepicker;
}());
exports["default"] = Datepicker;

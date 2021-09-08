(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["symbiote-component-library"] = factory();
	else
		root["symbiote-component-library"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 897:
/***/ (() => {

/*!
 * swiped-events.js - v1.1.4
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);

/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
var event_js_1 = __webpack_require__(722);
var date_format_js_1 = __webpack_require__(511);
var Datepicker_js_1 = __webpack_require__(942);
// filter out the config options inapproprite to pass to Datepicker
function filterOptions(options) {
    var newOpts = Object.assign({}, options);
    delete newOpts.inputs;
    delete newOpts.allowOneSidedRange;
    delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date
    return newOpts;
}
function setupDatepicker(rangepicker, changeDateListener, el, options) {
    event_js_1.registerListeners(rangepicker, [
        [el, 'changeDate', changeDateListener],
    ]);
    return new Datepicker_js_1["default"](el, options, rangepicker);
}
function onChangeDate(rangepicker, ev) {
    // to prevent both datepickers trigger the other side's update each other
    if (rangepicker.updating) {
        return;
    }
    rangepicker.updating = true;
    var target = ev.target;
    if (target.datepicker === undefined) {
        return;
    }
    var datepickers = rangepicker.datepickers;
    var setDateOptions = { render: false };
    var changedSide = rangepicker.inputs.indexOf(target);
    var otherSide = changedSide === 0 ? 1 : 0;
    var changedDate = datepickers[changedSide].dates[0];
    var otherDate = datepickers[otherSide].dates[0];
    if (changedDate !== undefined && otherDate !== undefined) {
        // if the start of the range > the end, swap them
        if (changedSide === 0 && changedDate > otherDate) {
            datepickers[0].setDate(otherDate, setDateOptions);
            datepickers[1].setDate(changedDate, setDateOptions);
        }
        else if (changedSide === 1 && changedDate < otherDate) {
            datepickers[0].setDate(changedDate, setDateOptions);
            datepickers[1].setDate(otherDate, setDateOptions);
        }
    }
    else if (!rangepicker.allowOneSidedRange) {
        // to prevent the range from becoming one-sided, copy changed side's
        // selection (no matter if it's empty) to the other side
        if (changedDate !== undefined || otherDate !== undefined) {
            setDateOptions.clear = true;
            datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
        }
    }
    datepickers[0].picker.update().render();
    datepickers[1].picker.update().render();
    delete rangepicker.updating;
}
/**
 * Class representing a date range picker
 */
var DateRangePicker = /** @class */ (function () {
    /**
     * Create a date range picker
     * @param  {Element} element - element to bind a date range picker
     * @param  {Object} [options] - config options
     */
    function DateRangePicker(element, options) {
        if (options === void 0) { options = {}; }
        var inputs = Array.isArray(options.inputs)
            ? options.inputs
            : Array.from(element.querySelectorAll('input'));
        if (inputs.length < 2) {
            return;
        }
        element.rangepicker = this;
        this.element = element;
        this.inputs = inputs.slice(0, 2);
        this.allowOneSidedRange = !!options.allowOneSidedRange;
        var changeDateListener = onChangeDate.bind(null, this);
        var cleanOptions = filterOptions(options);
        this.datepickers = [
            setupDatepicker(this, changeDateListener, this.inputs[0], cleanOptions),
            setupDatepicker(this, changeDateListener, this.inputs[1], cleanOptions),
        ];
        // normalize the range if inital dates are given
        if (this.dates[0] !== undefined) {
            onChangeDate(this, { target: this.inputs[0] });
        }
        else if (this.dates[1] !== undefined) {
            onChangeDate(this, { target: this.inputs[1] });
        }
    }
    Object.defineProperty(DateRangePicker.prototype, "dates", {
        /**
         * @type {Array} - selected date of the linked date pickers
         */
        get: function () {
            if (this.datepickers) {
                return [
                    this.datepickers[0].dates[0],
                    this.datepickers[1].dates[0],
                ];
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set new values to the config options
     * @param {Object} options - config options to update
     */
    DateRangePicker.prototype.setOptions = function (options) {
        this.allowOneSidedRange = !!options.allowOneSidedRange;
        var cleanOptions = filterOptions(options);
        this.datepickers[0].setOptions(cleanOptions);
        this.datepickers[1].setOptions(cleanOptions);
    };
    /**
     * Destroy the DateRangePicker instance
     * @return {DateRangePicker} - the instance destroyed
     */
    DateRangePicker.prototype.destroy = function () {
        this.datepickers[0].destroy();
        this.datepickers[1].destroy();
        event_js_1.unregisterListeners(this);
        delete this.element.rangepicker;
    };
    /**
     * Get the start and end dates of the date range
     *
     * The method returns Date objects by default. If format string is passed,
     * it returns date strings formatted in given format.
     * The result array always contains 2 items (start date/end date) and
     * undifined is used for unselected side. (e.g. If none is selected,
     * the result will be [undifined, undifined]. If only the end date is set
     * when allowOneSidedRange config option is true, [undifined, endDate] will
     * be returned.)
     *
     * @param  {String} [format] - Format string to stringify the dates
     * @return {Array} - Start and end dates
     */
    DateRangePicker.prototype.getDates = function (format) {
        var _this = this;
        if (format === void 0) { format = undefined; }
        var callback = format
            ? function (date) { return date_format_js_1.formatDate(date, format, _this.datepickers[0].config.locale); }
            : function (date) { return new Date(date); };
        return this.dates.map(function (date) { return date === undefined ? date : callback(date); });
    };
    return DateRangePicker;
}());
exports.Z = DateRangePicker;


/***/ }),

/***/ 942:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var date_format_js_1 = __webpack_require__(511);
var event_js_1 = __webpack_require__(722);
var base_locales_js_1 = __webpack_require__(80);
var defaultOptions_js_1 = __webpack_require__(684);
var processOptions_js_1 = __webpack_require__(467);
var Picker_js_1 = __webpack_require__(826);
var functions_js_1 = __webpack_require__(874);
var inputFieldListeners_js_1 = __webpack_require__(464);
var otherListeners_js_1 = __webpack_require__(26);
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
exports.default = Datepicker;


/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.switchView = exports.goToPrevOrNext = exports.triggerDatepickerEvent = void 0;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
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


/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.onPaste = exports.onClickInput = exports.onMousedown = exports.onFocus = exports.onKeydown = void 0;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var functions_js_1 = __webpack_require__(874);
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


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.onClickOutside = void 0;
var event_js_1 = __webpack_require__(722);
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


/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.onClickPicker = exports.onClickView = exports.onClickNextBtn = exports.onClickPrevBtn = exports.onClickViewSwitch = exports.onClickClearBtn = exports.onClickTodayBtn = void 0;
var date_js_1 = __webpack_require__(660);
var event_js_1 = __webpack_require__(722);
var functions_js_1 = __webpack_require__(874);
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


/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.locales = void 0;
// default locales
exports.locales = {
    en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM y"
    }
};


/***/ }),

/***/ 511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.formatDate = exports.parseDate = exports.reNonDateParts = exports.reFormatTokens = void 0;
var date_js_1 = __webpack_require__(660);
var utils_js_1 = __webpack_require__(89);
// pattern for format parts
exports.reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
exports.reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
var knownFormats = {};
// parse funtions for date parts
var parseFns = {
    y: function (date, year) {
        return new Date(date).setFullYear(parseInt(year, 10));
    },
    M: undefined,
    m: function (date, month, locale) {
        var newDate = new Date(date);
        var monthIndex = parseInt(month, 10) - 1;
        if (isNaN(monthIndex)) {
            if (!month) {
                return NaN;
            }
            var monthName_1 = month.toLowerCase();
            var compareNames = function (name) { return name.toLowerCase().startsWith(monthName_1); };
            // compare with both short and full names because some locales have periods
            // in the short names (not equal to the first X letters of the full names)
            monthIndex = locale.monthsShort.findIndex(compareNames);
            if (monthIndex < 0) {
                monthIndex = locale.months.findIndex(compareNames);
            }
            return monthIndex < 0 ? NaN : newDate.setMonth(monthIndex);
        }
        newDate.setMonth(monthIndex);
        return newDate.getMonth() !== normalizeMonth(monthIndex)
            ? newDate.setDate(0)
            : newDate.getTime();
    },
    d: function (date, day) {
        return new Date(date).setDate(parseInt(day, 10));
    }
};
parseFns.M = parseFns.m; // make "M" an alias of "m"
// format functions for date parts
var formatFns = {
    d: function (date) {
        return date.getDate();
    },
    dd: function (date) {
        return padZero(date.getDate(), 2);
    },
    D: function (date, locale) {
        return locale.daysShort[date.getDay()];
    },
    DD: function (date, locale) {
        return locale.days[date.getDay()];
    },
    m: function (date) {
        return date.getMonth() + 1;
    },
    mm: function (date) {
        return padZero(date.getMonth() + 1, 2);
    },
    M: function (date, locale) {
        return locale.monthsShort[date.getMonth()];
    },
    MM: function (date, locale) {
        return locale.months[date.getMonth()];
    },
    y: function (date) {
        return date.getFullYear();
    },
    yy: function (date) {
        return padZero(date.getFullYear(), 2).slice(-2);
    },
    yyyy: function (date) {
        return padZero(date.getFullYear(), 4);
    }
};
// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
    return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}
function padZero(num, length) {
    return num.toString().padStart(length, '0');
}
function parseFormatString(format) {
    if (typeof format !== 'string') {
        throw new Error("Invalid date format.");
    }
    if (format in knownFormats) {
        return knownFormats[format];
    }
    // sprit the format string into parts and seprators
    var separators = format.split(exports.reFormatTokens);
    var parts = format.match(new RegExp(exports.reFormatTokens, 'g'));
    if (separators.length === 0 || !parts) {
        throw new Error("Invalid date format.");
    }
    // collect format functions used in the format
    var partFormatters = parts.map(function (token) { return formatFns[token]; });
    // collect parse functions used in the format
    // iterate over parseFns' keys in order to keep the order of the keys.
    var partParsers = Object.keys(parseFns).reduce(function (parsers, key) {
        var token = parts.find(function (part) { return part[0] === key; });
        if (!token) {
            return parsers;
        }
        parsers[key] = parseFns[key];
        return parsers;
    }, {});
    var partParserKeys = Object.keys(partParsers);
    return knownFormats[format] = {
        parser: function (dateStr, locale) {
            var dateParts = dateStr.split(exports.reNonDateParts).reduce(function (dtParts, part, index) {
                if (part.length > 0 && parts[index]) {
                    var token = parts[index][0];
                    if (parseFns[token] !== undefined) {
                        dtParts[token] = part;
                    }
                }
                return dtParts;
            }, {});
            // iterate over partParsers' keys so that the parsing is made in the oder
            // of year, month and day to prevent the day parser from correcting last
            // day of month wrongly
            return partParserKeys.reduce(function (origDate, key) {
                var newDate = partParsers[key](origDate, dateParts[key], locale);
                // ingnore the part failed to parse
                return isNaN(newDate) ? origDate : newDate;
            }, date_js_1.today());
        },
        formatter: function (date, locale) {
            var dateStr = partFormatters.reduce(function (str, fn, index) {
                return str += "" + separators[index] + fn(date, locale);
            }, '');
            // separators' length is always parts' length + 1,
            return dateStr += utils_js_1.lastItemOf(separators);
        }
    };
}
function parseDate(dateStr, format, locale) {
    if (dateStr instanceof Date || typeof dateStr === 'number') {
        var date = date_js_1.stripTime(dateStr);
        return isNaN(date) ? undefined : date;
    }
    if (!dateStr) {
        return undefined;
    }
    if (dateStr === 'today') {
        return date_js_1.today();
    }
    if (format && format.toValue) {
        var date = format.toValue(dateStr, format, locale);
        return isNaN(date) ? undefined : date_js_1.stripTime(date);
    }
    return parseFormatString(format).parser(dateStr, locale);
}
exports.parseDate = parseDate;
function formatDate(date, format, locale) {
    if (isNaN(date) || (!date && date !== 0)) {
        return '';
    }
    var dateObj = typeof date === 'number' ? new Date(date) : date;
    if (format.toDisplay) {
        return format.toDisplay(dateObj, format, locale);
    }
    return parseFormatString(format).formatter(dateObj, locale);
}
exports.formatDate = formatDate;


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.startOfYearPeriod = exports.getWeek = exports.dayOfTheWeekOf = exports.addYears = exports.addMonths = exports.addWeeks = exports.addDays = exports.dateValue = exports.today = exports.stripTime = void 0;
function stripTime(timeValue) {
    return new Date(timeValue).setHours(0, 0, 0, 0);
}
exports.stripTime = stripTime;
function today() {
    return new Date().setHours(0, 0, 0, 0);
}
exports.today = today;
// Get the time value of the start of given date or year, month and day
function dateValue() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 0:
            return today();
        case 1:
            return stripTime(args[0]);
    }
    // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
    var newDate = new Date(0);
    newDate.setFullYear.apply(newDate, args);
    return newDate.setHours(0, 0, 0, 0);
}
exports.dateValue = dateValue;
function addDays(date, amount) {
    var newDate = new Date(date);
    return newDate.setDate(newDate.getDate() + amount);
}
exports.addDays = addDays;
function addWeeks(date, amount) {
    return addDays(date, amount * 7);
}
exports.addWeeks = addWeeks;
function addMonths(date, amount) {
    // If the day of the date is not in the new month, the last day of the new
    // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
    var newDate = new Date(date);
    var monthsToSet = newDate.getMonth() + amount;
    var expectedMonth = monthsToSet % 12;
    if (expectedMonth < 0) {
        expectedMonth += 12;
    }
    var time = newDate.setMonth(monthsToSet);
    return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}
exports.addMonths = addMonths;
function addYears(date, amount) {
    // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
    // new year will be returned.
    var newDate = new Date(date);
    var expectedMonth = newDate.getMonth();
    var time = newDate.setFullYear(newDate.getFullYear() + amount);
    return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}
exports.addYears = addYears;
// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
    return (day - from + 7) % 7;
}
// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart) {
    if (weekStart === void 0) { weekStart = 0; }
    var baseDay = new Date(baseDate).getDay();
    return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}
exports.dayOfTheWeekOf = dayOfTheWeekOf;
// Get the ISO week of a date
function getWeek(date) {
    // start of ISO week is Monday
    var thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
    // 1st week == the week where the 4th of January is in
    var firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
    return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}
exports.getWeek = getWeek;
// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
    /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
    var year = new Date(date).getFullYear();
    return Math.floor(year / years) * years;
}
exports.startOfYearPeriod = startOfYearPeriod;


/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.replaceChildNodes = exports.emptyChildNodes = exports.showElement = exports.hideElement = exports.isVisible = exports.parseHTML = void 0;
var range = document.createRange();
function parseHTML(html) {
    return range.createContextualFragment(html);
}
exports.parseHTML = parseHTML;
// equivalent to jQuery's :visble
function isVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
exports.isVisible = isVisible;
function hideElement(el) {
    if (el.style.display === 'none') {
        return;
    }
    // back up the existing display setting in data-style-display
    if (el.style.display) {
        el.dataset.styleDisplay = el.style.display;
    }
    el.style.display = 'none';
}
exports.hideElement = hideElement;
function showElement(el) {
    if (el.style.display !== 'none') {
        return;
    }
    if (el.dataset.styleDisplay) {
        // restore backed-up dispay property
        el.style.display = el.dataset.styleDisplay;
        delete el.dataset.styleDisplay;
    }
    else {
        el.style.display = '';
    }
}
exports.showElement = showElement;
function emptyChildNodes(el) {
    if (el.firstChild) {
        el.removeChild(el.firstChild);
        emptyChildNodes(el);
    }
}
exports.emptyChildNodes = emptyChildNodes;
function replaceChildNodes(el, newChildNodes) {
    emptyChildNodes(el);
    if (newChildNodes instanceof DocumentFragment) {
        el.appendChild(newChildNodes);
    }
    else if (typeof newChildNodes === 'string') {
        el.appendChild(parseHTML(newChildNodes));
    }
    else if (typeof newChildNodes.forEach === 'function') {
        newChildNodes.forEach(function (node) {
            el.appendChild(node);
        });
    }
}
exports.replaceChildNodes = replaceChildNodes;


/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.findElementInEventPath = exports.unregisterListeners = exports.registerListeners = void 0;
var listenerRegistry = new WeakMap();
var _a = EventTarget.prototype, addEventListener = _a.addEventListener, removeEventListener = _a.removeEventListener;
// Register event listeners to a key object
// listeners: array of listener definitions;
//   - each definition must be a flat array of event target and the arguments
//     used to call addEventListener() on the target
function registerListeners(keyObj, listeners) {
    var registered = listenerRegistry.get(keyObj);
    if (!registered) {
        registered = [];
        listenerRegistry.set(keyObj, registered);
    }
    listeners.forEach(function (listener) {
        addEventListener.call.apply(addEventListener, listener);
        registered.push(listener);
    });
}
exports.registerListeners = registerListeners;
function unregisterListeners(keyObj) {
    var listeners = listenerRegistry.get(keyObj);
    if (!listeners) {
        return;
    }
    listeners.forEach(function (listener) {
        removeEventListener.call.apply(removeEventListener, listener);
    });
    listenerRegistry["delete"](keyObj);
}
exports.unregisterListeners = unregisterListeners;
// Event.composedPath() polyfill for Edge
// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
if (!Event.prototype.composedPath) {
    var getComposedPath_1 = function (node, path) {
        if (path === void 0) { path = []; }
        path.push(node);
        var parent;
        if (node.parentNode) {
            parent = node.parentNode;
        }
        else if (node.host) { // ShadowRoot
            parent = node.host;
        }
        else if (node.defaultView) { // Document
            parent = node.defaultView;
        }
        return parent ? getComposedPath_1(parent, path) : path;
    };
    Event.prototype.composedPath = function () {
        return getComposedPath_1(this.target);
    };
}
function findFromPath(path, criteria, currentTarget, index) {
    if (index === void 0) { index = 0; }
    var el = path[index];
    if (criteria(el)) {
        return el;
    }
    else if (el === currentTarget || !el.parentElement) {
        // stop when reaching currentTarget or <html>
        return;
    }
    return findFromPath(path, criteria, currentTarget, index + 1);
}
// Search for the actual target of a delegated event
function findElementInEventPath(ev, selector) {
    var criteria = typeof selector === 'function' ? selector : function (el) { return el.matches(selector); };
    return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}
exports.findElementInEventPath = findElementInEventPath;


/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.optimizeTemplateHTML = exports.createTagRepeat = exports.limitToRange = exports.isInRange = exports.stringToArray = exports.pushUnique = exports.lastItemOf = exports.hasProperty = void 0;
function hasProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
exports.hasProperty = hasProperty;
function lastItemOf(arr) {
    return arr[arr.length - 1];
}
exports.lastItemOf = lastItemOf;
// push only the items not included in the array
function pushUnique(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        if (arr.includes(item)) {
            return;
        }
        arr.push(item);
    });
    return arr;
}
exports.pushUnique = pushUnique;
function stringToArray(str, separator) {
    // convert empty string to an empty array
    return str ? str.split(separator) : [];
}
exports.stringToArray = stringToArray;
function isInRange(testVal, min, max) {
    var minOK = min === undefined || testVal >= min;
    var maxOK = max === undefined || testVal <= max;
    return minOK && maxOK;
}
exports.isInRange = isInRange;
function limitToRange(val, min, max) {
    if (val < min) {
        return min;
    }
    if (val > max) {
        return max;
    }
    return val;
}
exports.limitToRange = limitToRange;
function createTagRepeat(tagName, repeat, attributes, index, html) {
    if (attributes === void 0) { attributes = {}; }
    if (index === void 0) { index = 0; }
    if (html === void 0) { html = ''; }
    var openTagSrc = Object.keys(attributes).reduce(function (src, attr) {
        var val = attributes[attr];
        if (typeof val === 'function') {
            val = val(index);
        }
        return src + " " + attr + "=\"" + val + "\"";
    }, tagName);
    html += "<" + openTagSrc + "></" + tagName + ">";
    var next = index + 1;
    return next < repeat
        ? createTagRepeat(tagName, repeat, attributes, next, html)
        : html;
}
exports.createTagRepeat = createTagRepeat;
// Remove the spacing surrounding tags for HTML parser not to create text nodes
// before/after elements
function optimizeTemplateHTML(html) {
    return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
}
exports.optimizeTemplateHTML = optimizeTemplateHTML;


/***/ }),

/***/ 684:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
// config options updatable by setOptions() and their default values
var defaultOptions = {
    autohide: false,
    beforeShowDay: null,
    beforeShowDecade: null,
    beforeShowMonth: null,
    beforeShowYear: null,
    calendarWeeks: false,
    clearBtn: false,
    dateDelimiter: ',',
    datesDisabled: [],
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    defaultViewDate: undefined,
    disableTouchKeyboard: false,
    format: 'dd/mm/yyyy',
    language: 'en',
    maxDate: null,
    maxNumberOfDates: 1,
    maxView: 3,
    minDate: null,
    nextArrow: '→',
    orientation: 'auto',
    prevArrow: '←',
    showDaysOfWeek: true,
    showOnFocus: true,
    startView: 0,
    title: '',
    todayBtn: false,
    todayBtnMode: 0,
    todayHighlight: false,
    weekStart: 0
};
exports.default = defaultOptions;


/***/ }),

/***/ 467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var date_format_js_1 = __webpack_require__(511);
var dom_js_1 = __webpack_require__(659);
var defaultOptions_js_1 = __webpack_require__(684);
var defaultLang = defaultOptions_js_1["default"].language, defaultFormat = defaultOptions_js_1["default"].format, defaultWeekStart = defaultOptions_js_1["default"].weekStart;
// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
    return dow.length < 6 && day >= 0 && day < 7
        ? utils_js_1.pushUnique(dow, day)
        : dow;
}
function calcEndOfWeek(startOfWeek) {
    return (startOfWeek + 6) % 7;
}
// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
    var date = date_format_js_1.parseDate(value, format, locale);
    return date !== undefined ? date : origValue;
}
// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue) {
    var viewId = parseInt(value, 10);
    return viewId >= 0 && viewId < 4 ? viewId : origValue;
}
// Create Datepicker configuration to set
function processOptions(options, datepicker) {
    var inOpts = Object.assign({}, options);
    var config = {};
    var locales = datepicker.constructor.locales;
    var _a = datepicker.config || {}, format = _a.format, language = _a.language, locale = _a.locale, maxDate = _a.maxDate, maxView = _a.maxView, minDate = _a.minDate, startView = _a.startView, weekStart = _a.weekStart;
    if (inOpts.language) {
        var lang = void 0;
        if (inOpts.language !== language) {
            if (locales[inOpts.language]) {
                lang = inOpts.language;
            }
            else {
                // Check if langauge + region tag can fallback to the one without
                // region (e.g. fr-CA → fr)
                lang = inOpts.language.split('-')[0];
                if (locales[lang] === undefined) {
                    lang = false;
                }
            }
        }
        delete inOpts.language;
        if (lang) {
            language = config.language = lang;
            // update locale as well when updating language
            var origLocale = locale || locales[defaultLang];
            // use default language's properties for the fallback
            locale = Object.assign({
                format: defaultFormat,
                weekStart: defaultWeekStart
            }, locales[defaultLang]);
            if (language !== defaultLang) {
                Object.assign(locale, locales[language]);
            }
            config.locale = locale;
            // if format and/or weekStart are the same as old locale's defaults,
            // update them to new locale's defaults
            if (format === origLocale.format) {
                format = config.format = locale.format;
            }
            if (weekStart === origLocale.weekStart) {
                weekStart = config.weekStart = locale.weekStart;
                config.weekEnd = calcEndOfWeek(locale.weekStart);
            }
        }
    }
    if (inOpts.format) {
        var hasToDisplay = typeof inOpts.format.toDisplay === 'function';
        var hasToValue = typeof inOpts.format.toValue === 'function';
        var validFormatString = date_format_js_1.reFormatTokens.test(inOpts.format);
        if ((hasToDisplay && hasToValue) || validFormatString) {
            format = config.format = inOpts.format;
        }
        delete inOpts.format;
    }
    //*** dates ***//
    // while min and maxDate for "no limit" in the options are better to be null
    // (especially when updating), the ones in the config have to be undefined
    // because null is treated as 0 (= unix epoch) when comparing with time value
    var minDt = minDate;
    var maxDt = maxDate;
    if (inOpts.minDate !== undefined) {
        minDt = inOpts.minDate === null
            ? date_js_1.dateValue(0, 0, 1) // set 0000-01-01 to prevent negative values for year
            : validateDate(inOpts.minDate, format, locale, minDt);
        delete inOpts.minDate;
    }
    if (inOpts.maxDate !== undefined) {
        maxDt = inOpts.maxDate === null
            ? undefined
            : validateDate(inOpts.maxDate, format, locale, maxDt);
        delete inOpts.maxDate;
    }
    if (maxDt < minDt) {
        minDate = config.minDate = maxDt;
        maxDate = config.maxDate = minDt;
    }
    else {
        if (minDate !== minDt) {
            minDate = config.minDate = minDt;
        }
        if (maxDate !== maxDt) {
            maxDate = config.maxDate = maxDt;
        }
    }
    if (inOpts.datesDisabled) {
        config.datesDisabled = inOpts.datesDisabled.reduce(function (dates, dt) {
            var date = date_format_js_1.parseDate(dt, format, locale);
            return date !== undefined ? utils_js_1.pushUnique(dates, date) : dates;
        }, []);
        delete inOpts.datesDisabled;
    }
    if (inOpts.defaultViewDate !== undefined) {
        var viewDate = date_format_js_1.parseDate(inOpts.defaultViewDate, format, locale);
        if (viewDate !== undefined) {
            config.defaultViewDate = viewDate;
        }
        delete inOpts.defaultViewDate;
    }
    //*** days of week ***//
    if (inOpts.weekStart !== undefined) {
        var wkStart = Number(inOpts.weekStart) % 7;
        if (!isNaN(wkStart)) {
            weekStart = config.weekStart = wkStart;
            config.weekEnd = calcEndOfWeek(wkStart);
        }
        delete inOpts.weekStart;
    }
    if (inOpts.daysOfWeekDisabled) {
        config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekDisabled;
    }
    if (inOpts.daysOfWeekHighlighted) {
        config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
        delete inOpts.daysOfWeekHighlighted;
    }
    //*** multi date ***//
    if (inOpts.maxNumberOfDates !== undefined) {
        var maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
        if (maxNumberOfDates >= 0) {
            config.maxNumberOfDates = maxNumberOfDates;
            config.multidate = maxNumberOfDates !== 1;
        }
        delete inOpts.maxNumberOfDates;
    }
    if (inOpts.dateDelimiter) {
        config.dateDelimiter = String(inOpts.dateDelimiter);
        delete inOpts.dateDelimiter;
    }
    //*** view mode ***//
    var newMaxView = maxView;
    if (inOpts.maxView !== undefined) {
        newMaxView = validateViewId(inOpts.maxView, maxView);
        delete inOpts.maxView;
    }
    if (newMaxView !== maxView) {
        maxView = config.maxView = newMaxView;
    }
    var newStartView = startView;
    if (inOpts.startView !== undefined) {
        newStartView = validateViewId(inOpts.startView, newStartView);
        delete inOpts.startView;
    }
    // ensure start view < max
    newStartView = maxView < newStartView ? maxView : newStartView;
    if (newStartView !== startView) {
        config.startView = newStartView;
    }
    //*** template ***//
    if (inOpts.prevArrow) {
        var prevArrow = dom_js_1.parseHTML(inOpts.prevArrow);
        if (prevArrow.childNodes.length > 0) {
            config.prevArrow = prevArrow.childNodes;
        }
        delete inOpts.prevArrow;
    }
    if (inOpts.nextArrow) {
        var nextArrow = dom_js_1.parseHTML(inOpts.nextArrow);
        if (nextArrow.childNodes.length > 0) {
            config.nextArrow = nextArrow.childNodes;
        }
        delete inOpts.nextArrow;
    }
    //*** misc ***//
    if (inOpts.disableTouchKeyboard !== undefined) {
        config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
        delete inOpts.disableTouchKeyboard;
    }
    if (inOpts.orientation) {
        var orientation_1 = inOpts.orientation.toLowerCase().split(/\s+/g);
        config.orientation = {
            x: orientation_1.find(function (x) { return (x === 'left' || x === 'right'); }) || 'auto',
            y: orientation_1.find(function (y) { return (y === 'top' || y === 'bottom'); }) || 'auto'
        };
        delete inOpts.orientation;
    }
    if (inOpts.todayBtnMode !== undefined) {
        switch (inOpts.todayBtnMode) {
            case 0:
            case 1:
                config.todayBtnMode = inOpts.todayBtnMode;
        }
        delete inOpts.todayBtnMode;
    }
    //*** copy the rest ***//
    Object.keys(inOpts).forEach(function (key) {
        if (inOpts[key] !== undefined && utils_js_1.hasProperty(defaultOptions_js_1["default"], key)) {
            config[key] = inOpts[key];
        }
    });
    return config;
}
exports.default = processOptions;


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var dom_js_1 = __webpack_require__(659);
var event_js_1 = __webpack_require__(722);
var pickerTemplate_js_1 = __webpack_require__(314);
var DaysView_js_1 = __webpack_require__(706);
var MonthsView_js_1 = __webpack_require__(211);
var YearsView_js_1 = __webpack_require__(25);
var functions_js_1 = __webpack_require__(874);
var pickerListeners_js_1 = __webpack_require__(230);
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
exports.default = Picker;


/***/ }),

/***/ 385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var calendarWeeksTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"calendar-weeks\">\n  <div class=\"days-of-week\"><span class=\"dow\"></span></div>\n  <div class=\"weeks\">" + utils_js_1.createTagRepeat('span', 6, { "class": 'week' }) + "</div>\n</div>");
exports.default = calendarWeeksTemplate;


/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var daysTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"days\">\n  <div class=\"days-of-week\">" + utils_js_1.createTagRepeat('span', 7, { "class": 'dow' }) + "</div>\n  <div class=\"datepicker-grid\">" + utils_js_1.createTagRepeat('span', 42) + "</div>\n</div>");
exports.default = daysTemplate;


/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var pickerTemplate = utils_js_1.optimizeTemplateHTML("<div class=\"datepicker\">\n  <div class=\"datepicker-picker\">\n    <div class=\"datepicker-header\">\n      <div class=\"datepicker-title\"></div>\n      <div class=\"datepicker-controls\">\n        <button class=\"%buttonClass% prev-btn\"></button>\n        <button class=\"%buttonClass% view-switch\"></button>\n        <button class=\"%buttonClass% next-btn\"></button>\n      </div>\n    </div>\n    <div class=\"datepicker-main\"></div>\n    <div class=\"datepicker-footer\">\n      <div class=\"datepicker-controls\">\n        <button class=\"%buttonClass% today-btn\"></button>\n        <button class=\"%buttonClass% clear-btn\"></button>\n      </div>\n    </div>\n  </div>\n</div>");
exports.default = pickerTemplate;


/***/ }),

/***/ 706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var date_format_js_1 = __webpack_require__(511);
var dom_js_1 = __webpack_require__(659);
var daysTemplate_js_1 = __webpack_require__(448);
var calendarWeeksTemplate_js_1 = __webpack_require__(385);
var View_js_1 = __webpack_require__(34);
var DaysView = /** @class */ (function (_super) {
    __extends(DaysView, _super);
    function DaysView(picker) {
        return _super.call(this, picker, {
            id: 0,
            name: 'days',
            cellClass: 'day'
        }) || this;
    }
    DaysView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            var inner = dom_js_1.parseHTML(daysTemplate_js_1["default"]).firstChild;
            this.dow = inner.firstChild;
            this.grid = inner.lastChild;
            this.element.appendChild(inner);
        }
        _super.prototype.init.call(this, options);
    };
    DaysView.prototype.setOptions = function (options) {
        var _this = this;
        var updateDOW;
        if (utils_js_1.hasProperty(options, 'minDate')) {
            this.minDate = options.minDate;
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            this.maxDate = options.maxDate;
        }
        if (options.datesDisabled) {
            this.datesDisabled = options.datesDisabled;
        }
        if (options.daysOfWeekDisabled) {
            this.daysOfWeekDisabled = options.daysOfWeekDisabled;
            updateDOW = true;
        }
        if (options.daysOfWeekHighlighted) {
            this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
        }
        if (options.todayHighlight !== undefined) {
            this.todayHighlight = options.todayHighlight;
        }
        if (options.weekStart !== undefined) {
            this.weekStart = options.weekStart;
            this.weekEnd = options.weekEnd;
            updateDOW = true;
        }
        if (options.locale) {
            var locale = this.locale = options.locale;
            this.dayNames = locale.daysMin;
            this.switchLabelFormat = locale.titleFormat;
            this.switchLabel = date_format_js_1.formatDate(this.picker.viewDate, locale.titleFormat, locale);
            updateDOW = true;
        }
        if (options.beforeShowDay !== undefined) {
            this.beforeShow = typeof options.beforeShowDay === 'function'
                ? options.beforeShowDay
                : undefined;
        }
        if (options.calendarWeeks !== undefined) {
            if (options.calendarWeeks && !this.calendarWeeks) {
                var weeksElem = dom_js_1.parseHTML(calendarWeeksTemplate_js_1["default"]).firstChild;
                this.calendarWeeks = {
                    element: weeksElem,
                    dow: weeksElem.firstChild,
                    weeks: weeksElem.lastChild
                };
                this.element.insertBefore(weeksElem, this.element.firstChild);
            }
            else if (this.calendarWeeks && !options.calendarWeeks) {
                this.element.removeChild(this.calendarWeeks.element);
                this.calendarWeeks = null;
            }
        }
        if (options.showDaysOfWeek !== undefined) {
            if (options.showDaysOfWeek) {
                dom_js_1.showElement(this.dow);
                if (this.calendarWeeks) {
                    dom_js_1.showElement(this.calendarWeeks.dow);
                }
            }
            else {
                dom_js_1.hideElement(this.dow);
                if (this.calendarWeeks) {
                    dom_js_1.hideElement(this.calendarWeeks.dow);
                }
            }
        }
        // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
        if (updateDOW) {
            Array.from(this.dow.children).forEach(function (el, index) {
                var dow = (_this.weekStart + index) % 7;
                el.textContent = _this.dayNames[dow];
                el.className = _this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
            });
        }
    };
    // Apply update on the focused date to view's settings
    DaysView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        var viewYear = viewDate.getFullYear();
        var viewMonth = viewDate.getMonth();
        var firstOfMonth = date_js_1.dateValue(viewYear, viewMonth, 1);
        var start = date_js_1.dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);
        this.first = firstOfMonth;
        this.last = date_js_1.dateValue(viewYear, viewMonth + 1, 0);
        this.start = start;
        this.switchLabel = date_format_js_1.formatDate(viewDate, this.switchLabelFormat, this.locale);
        this.focused = this.picker.viewDate;
    };
    // Apply update on the selected dates to view's settings
    DaysView.prototype.updateSelection = function () {
        var _a = this.picker.datepicker, dates = _a.dates, range = _a.range;
        this.selected = dates;
        this.range = range;
    };
    // Update the entire view UI
    DaysView.prototype.render = function () {
        var _this = this;
        // update today marker on ever render
        this.today = this.todayHighlight ? date_js_1.today() : undefined;
        // refresh disabled dates on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = __spreadArray([], this.datesDisabled);
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.first <= this.minDate);
        this.picker.setNextBtnDisabled(this.last >= this.maxDate);
        if (this.calendarWeeks) {
            // start of the UTC week (Monday) of the 1st of the month
            var startOfWeek_1 = date_js_1.dayOfTheWeekOf(this.first, 1, 1);
            Array.from(this.calendarWeeks.weeks.children).forEach(function (el, index) {
                el.textContent = date_js_1.getWeek(date_js_1.addWeeks(startOfWeek_1, index));
            });
        }
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            var current = date_js_1.addDays(_this.start, index);
            var date = new Date(current);
            var day = date.getDay();
            el.className = "datepicker-cell " + _this.cellClass;
            el.dataset.date = current;
            el.textContent = date.getDate();
            if (current < _this.first) {
                classList.add('prev');
            }
            else if (current > _this.last) {
                classList.add('next');
            }
            if (_this.today === current) {
                classList.add('today');
            }
            if (current < _this.minDate || current > _this.maxDate || _this.disabled.includes(current)) {
                classList.add('disabled');
            }
            if (_this.daysOfWeekDisabled.includes(day)) {
                classList.add('disabled');
                utils_js_1.pushUnique(_this.disabled, current);
            }
            if (_this.daysOfWeekHighlighted.includes(day)) {
                classList.add('highlighted');
            }
            if (_this.range) {
                var _a = _this.range, rangeStart = _a[0], rangeEnd = _a[1];
                if (current > rangeStart && current < rangeEnd) {
                    classList.add('range');
                }
                if (current === rangeStart) {
                    classList.add('range-start');
                }
                if (current === rangeEnd) {
                    classList.add('range-end');
                }
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, current, current);
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    DaysView.prototype.refresh = function () {
        var _this = this;
        var _a = this.range || [], rangeStart = _a[0], rangeEnd = _a[1];
        this.grid
            .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
            .forEach(function (el) {
            el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el) {
            var current = Number(el.dataset.date);
            var classList = el.classList;
            if (current > rangeStart && current < rangeEnd) {
                classList.add('range');
            }
            if (current === rangeStart) {
                classList.add('range-start');
            }
            if (current === rangeEnd) {
                classList.add('range-end');
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    DaysView.prototype.refreshFocus = function () {
        var index = Math.round((this.focused - this.start) / 86400000);
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
    };
    return DaysView;
}(View_js_1["default"]));
exports.default = DaysView;


/***/ }),

/***/ 211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var dom_js_1 = __webpack_require__(659);
var View_js_1 = __webpack_require__(34);
var MonthsView = /** @class */ (function (_super) {
    __extends(MonthsView, _super);
    function MonthsView(picker) {
        return _super.call(this, picker, {
            id: 1,
            name: 'months',
            cellClass: 'month'
        }) || this;
    }
    MonthsView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            this.grid = this.element;
            this.element.classList.add('months', 'datepicker-grid');
            this.grid.appendChild(dom_js_1.parseHTML(utils_js_1.createTagRepeat('span', 12, { 'data-month': function (ix) { return ix; } })));
        }
        _super.prototype.init.call(this, options);
    };
    MonthsView.prototype.setOptions = function (options) {
        if (options.locale) {
            this.monthNames = options.locale.monthsShort;
        }
        if (utils_js_1.hasProperty(options, 'minDate')) {
            if (options.minDate === undefined) {
                this.minYear = this.minMonth = this.minDate = undefined;
            }
            else {
                var minDateObj = new Date(options.minDate);
                this.minYear = minDateObj.getFullYear();
                this.minMonth = minDateObj.getMonth();
                this.minDate = minDateObj.setDate(1);
            }
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            if (options.maxDate === undefined) {
                this.maxYear = this.maxMonth = this.maxDate = undefined;
            }
            else {
                var maxDateObj = new Date(options.maxDate);
                this.maxYear = maxDateObj.getFullYear();
                this.maxMonth = maxDateObj.getMonth();
                this.maxDate = date_js_1.dateValue(this.maxYear, this.maxMonth + 1, 0);
            }
        }
        if (options.beforeShowMonth !== undefined) {
            this.beforeShow = typeof options.beforeShowMonth === 'function'
                ? options.beforeShowMonth
                : undefined;
        }
    };
    // Update view's settings to reflect the viewDate set on the picker
    MonthsView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        this.year = viewDate.getFullYear();
        this.switchLabel = this.year;
        this.focused = viewDate.getMonth();
    };
    // Update view's settings to reflect the selected dates
    MonthsView.prototype.updateSelection = function () {
        this.selected = this.picker.datepicker.dates.reduce(function (selected, timeValue) {
            var date = new Date(timeValue);
            var year = date.getFullYear();
            var month = date.getMonth();
            if (selected[year] === undefined) {
                selected[year] = [month];
            }
            else {
                utils_js_1.pushUnique(selected[year], month);
            }
            return selected;
        }, {});
    };
    // Update the entire view UI
    MonthsView.prototype.render = function () {
        var _this = this;
        // refresh disabled months on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.year <= this.minYear);
        this.picker.setNextBtnDisabled(this.year >= this.maxYear);
        var selected = this.selected[this.year] || [];
        var yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
        var isMinYear = this.year === this.minYear;
        var isMaxYear = this.year === this.maxYear;
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            el.className = "datepicker-cell " + _this.cellClass;
            // reset text on every render to clear the custom content set
            // by beforeShow hook at previous render
            el.textContent = _this.monthNames[index];
            if (yrOutOfRange
                || isMinYear && index < _this.minMonth
                || isMaxYear && index > _this.maxMonth) {
                classList.add('disabled');
            }
            if (selected.includes(index)) {
                classList.add('selected');
            }
            if (index === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, index, date_js_1.dateValue(_this.year, index, 1));
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    MonthsView.prototype.refresh = function () {
        var _this = this;
        var selected = this.selected[this.year] || [];
        this.grid.querySelectorAll('.selected, .focused').forEach(function (el) {
            el.classList.remove('selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            if (selected.includes(index)) {
                classList.add('selected');
            }
            if (index === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    MonthsView.prototype.refreshFocus = function () {
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[this.focused].classList.add('focused');
    };
    return MonthsView;
}(View_js_1["default"]));
exports.default = MonthsView;


/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var dom_js_1 = __webpack_require__(659);
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
exports.default = View;


/***/ }),

/***/ 25:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var utils_js_1 = __webpack_require__(89);
var date_js_1 = __webpack_require__(660);
var dom_js_1 = __webpack_require__(659);
var View_js_1 = __webpack_require__(34);
function toTitleCase(word) {
    return __spreadArray([], word).reduce(function (str, ch, ix) { return str += ix ? ch : ch.toUpperCase(); }, '');
}
// Class representing the years and decades view elements
var YearsView = /** @class */ (function (_super) {
    __extends(YearsView, _super);
    function YearsView(picker, config) {
        return _super.call(this, picker, config) || this;
    }
    YearsView.prototype.init = function (options, onConstruction) {
        if (onConstruction === void 0) { onConstruction = true; }
        if (onConstruction) {
            this.navStep = this.step * 10;
            this.beforeShowOption = "beforeShow" + toTitleCase(this.cellClass);
            this.grid = this.element;
            this.element.classList.add(this.name, 'datepicker-grid');
            this.grid.appendChild(dom_js_1.parseHTML(utils_js_1.createTagRepeat('span', 12)));
        }
        _super.prototype.init.call(this, options);
    };
    YearsView.prototype.setOptions = function (options) {
        if (utils_js_1.hasProperty(options, 'minDate')) {
            if (options.minDate === undefined) {
                this.minYear = this.minDate = undefined;
            }
            else {
                this.minYear = date_js_1.startOfYearPeriod(options.minDate, this.step);
                this.minDate = date_js_1.dateValue(this.minYear, 0, 1);
            }
        }
        if (utils_js_1.hasProperty(options, 'maxDate')) {
            if (options.maxDate === undefined) {
                this.maxYear = this.maxDate = undefined;
            }
            else {
                this.maxYear = date_js_1.startOfYearPeriod(options.maxDate, this.step);
                this.maxDate = date_js_1.dateValue(this.maxYear, 11, 31);
            }
        }
        if (options[this.beforeShowOption] !== undefined) {
            var beforeShow = options[this.beforeShowOption];
            this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
        }
    };
    // Update view's settings to reflect the viewDate set on the picker
    YearsView.prototype.updateFocus = function () {
        var viewDate = new Date(this.picker.viewDate);
        var first = date_js_1.startOfYearPeriod(viewDate, this.navStep);
        var last = first + 9 * this.step;
        this.first = first;
        this.last = last;
        this.start = first - this.step;
        this.switchLabel = first + "-" + last;
        this.focused = date_js_1.startOfYearPeriod(viewDate, this.step);
    };
    // Update view's settings to reflect the selected dates
    YearsView.prototype.updateSelection = function () {
        var _this = this;
        this.selected = this.picker.datepicker.dates.reduce(function (years, timeValue) {
            return utils_js_1.pushUnique(years, date_js_1.startOfYearPeriod(timeValue, _this.step));
        }, []);
    };
    // Update the entire view UI
    YearsView.prototype.render = function () {
        var _this = this;
        // refresh disabled years on every render in order to clear the ones added
        // by beforeShow hook at previous render
        this.disabled = [];
        this.picker.setViewSwitchLabel(this.switchLabel);
        this.picker.setPrevBtnDisabled(this.first <= this.minYear);
        this.picker.setNextBtnDisabled(this.last >= this.maxYear);
        Array.from(this.grid.children).forEach(function (el, index) {
            var classList = el.classList;
            var current = _this.start + (index * _this.step);
            el.className = "datepicker-cell " + _this.cellClass;
            el.textContent = el.dataset.year = current;
            if (index === 0) {
                classList.add('prev');
            }
            else if (index === 11) {
                classList.add('next');
            }
            if (current < _this.minYear || current > _this.maxYear) {
                classList.add('disabled');
            }
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
            if (_this.beforeShow) {
                _this.performBeforeHook(el, current, date_js_1.dateValue(current, 0, 1));
            }
        });
    };
    // Update the view UI by applying the changes of selected and focused items
    YearsView.prototype.refresh = function () {
        var _this = this;
        this.grid.querySelectorAll('.selected, .focused').forEach(function (el) {
            el.classList.remove('selected', 'focused');
        });
        Array.from(this.grid.children).forEach(function (el) {
            var current = Number(el.textContent);
            var classList = el.classList;
            if (_this.selected.includes(current)) {
                classList.add('selected');
            }
            if (current === _this.focused) {
                classList.add('focused');
            }
        });
    };
    // Update the view UI by applying the change of focused item
    YearsView.prototype.refreshFocus = function () {
        var index = Math.round((this.focused - this.start) / this.step);
        this.grid.querySelectorAll('.focused').forEach(function (el) {
            el.classList.remove('focused');
        });
        this.grid.children[index].classList.add('focused');
    };
    return YearsView;
}(View_js_1["default"]));
exports.default = YearsView;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Accordion": () => (/* reexport */ Accordion),
  "Breadcrumbs": () => (/* reexport */ Breadcrumbs),
  "Button": () => (/* reexport */ Button),
  "Card": () => (/* reexport */ Card),
  "Carousel": () => (/* reexport */ Carousel),
  "Checkbox": () => (/* reexport */ Checkbox),
  "DatePicker": () => (/* reexport */ DatePicker),
  "Footer": () => (/* reexport */ Footer),
  "Hero": () => (/* reexport */ Hero),
  "Icon": () => (/* reexport */ Icon),
  "Label": () => (/* reexport */ Label),
  "List": () => (/* reexport */ List),
  "Modal": () => (/* reexport */ Modal),
  "Notification": () => (/* reexport */ Notification),
  "PageAlert": () => (/* reexport */ PageAlert),
  "Pagination": () => (/* reexport */ Pagination),
  "ProgressBar": () => (/* reexport */ ProgressBar),
  "Radio": () => (/* reexport */ Radio),
  "Select": () => (/* reexport */ Select),
  "Separator": () => (/* reexport */ Separator),
  "Slider": () => (/* reexport */ Slider),
  "StackedContent": () => (/* reexport */ StackedContent),
  "Table": () => (/* reexport */ Table),
  "Toggle": () => (/* reexport */ Toggle),
  "Tooltip": () => (/* reexport */ Tooltip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/Components/Atoms/Button/Button.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (react.createElement("button", { "data-testid": "button", className: "button " + this.props.type + " " + this.props.size + " " + this.props.style + (this.props.enabled ? '' : ' disabled') }, this.props.children));
    };
    Button.defaultProps = {
        enabled: true
    };
    return Button;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Checkbox/Checkbox.tsx
var Checkbox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Checkbox = /** @class */ (function (_super) {
    Checkbox_extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "checkbox-" + id;
        };
        var checkboxId = this.props.checkboxId;
        if (!checkboxId)
            checkboxId = generateId();
        return (react.createElement("div", { "data-testid": "checkbox", className: "checkbox" },
            react.createElement("label", { className: "checkbox-label", htmlFor: checkboxId },
                react.createElement("div", { className: "checkbox-group" },
                    react.createElement("input", { type: "checkbox", className: "checkbox-input", id: checkboxId, hidden: true }),
                    react.createElement("span", { className: "checkbox-checked" })),
                react.createElement("p", { className: "title" }, this.props.checkboxLabel))));
    };
    return Checkbox;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Icon/Icon.tsx
var Icon_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

{ /* <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link> */ }
var Icon = /** @class */ (function (_super) {
    Icon_extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, icon = _a.icon, size = _a.size, color = _a.color;
        return (react.createElement("i", { "data-testid": "icon", className: "icon las la-" + icon + " " + ((size) ? size : '') + " " + ((color) ? color : '') }));
    };
    return Icon;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Label/Label.tsx
var Label_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Label = /** @class */ (function (_super) {
    Label_extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        return (react.createElement("span", { "data-testid": "label", className: "label label-" + this.props.labelStatus }, this.props.labelText));
    };
    return Label;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/List/List.tsx
var List_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var List = /** @class */ (function (_super) {
    List_extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _this = this;
        var testId = (this.props.parent) ? 'list' : 'list-child';
        var items = this.props.listContent.map(function (item, index) {
            if (item.children) {
                return (react.createElement("li", { key: index },
                    item.itemText,
                    react.createElement(List, { ordered: _this.props.ordered, parent: false, listContent: item.children })));
            }
            else {
                return (react.createElement("li", { key: index }, item.itemText));
            }
        });
        if (this.props.ordered) {
            return (react.createElement("ol", { className: "styled-list", "data-testid": testId }, items));
        }
        else {
            return (react.createElement("ul", { className: "styled-list", "data-testid": testId }, items));
        }
    };
    List.defaultProps = {
        ordered: false,
        parent: true
    };
    return List;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Radio/Radio.tsx
var Radio_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Radio = /** @class */ (function (_super) {
    Radio_extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "radio-" + id;
        };
        var radioName = this.props.radioId;
        if (!radioName)
            radioName = generateId();
        return (react.createElement("div", { "data-testid": "radio", className: "radio" }, this.props.radioItems.map(function (item, index) {
            var value = item.radioValue;
            if (!value)
                value = item.radioLabel;
            var radioId = generateId();
            return (react.createElement("label", { className: "radio-label", htmlFor: radioId, key: index },
                react.createElement("div", { className: "radio-group" },
                    react.createElement("input", { type: "radio", className: "radio-input", name: radioName, id: radioId, value: value, defaultChecked: item.radioSelected, hidden: true }),
                    react.createElement("span", { className: "radio-checked" })),
                react.createElement("p", { className: "title" }, item.radioLabel)));
        })));
    };
    return Radio;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Select/Select.tsx
var Select_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Select = /** @class */ (function (_super) {
    Select_extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "radio-" + id;
        };
        var selectId = this.props.selectId;
        if (!selectId)
            selectId = generateId();
        return (react.createElement("div", { "data-testid": "select", className: "select" },
            react.createElement("label", { htmlFor: selectId }, this.props.selectLabel),
            react.createElement("select", { id: selectId, name: selectId }, this.props.selectItems.map(function (item, index) {
                var value = item.value;
                if (!value)
                    value = item.label;
                return (react.createElement("option", { key: index, value: value }, item.label));
            }))));
    };
    return Select;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Slider/Slider.tsx
var Slider_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Slider = /** @class */ (function (_super) {
    Slider_extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        var value = 0;
        if (props.value) {
            value = props.value;
        }
        _this.state = {
            value: value
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Slider.prototype.handleChange = function (e) {
        this.setState({ value: parseFloat(e.target.value) });
    };
    Slider.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "slider-" + id;
        };
        var _a = this.props, min = _a.min, max = _a.max;
        var value = this.state.value;
        var sliderId = this.props.sliderId;
        if (!sliderId)
            sliderId = generateId();
        return (react.createElement("label", { className: "slider", "data-testid": "slider", htmlFor: sliderId },
            react.createElement("input", { type: "range", id: sliderId, min: min, max: max, value: value, onChange: this.handleChange }),
            react.createElement("span", { className: "value" }, value)));
    };
    Slider.defaultProps = {
        min: 0,
        max: 10,
        value: 0
    };
    return Slider;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Table/Table.tsx
var Table_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Table = /** @class */ (function (_super) {
    Table_extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.createMarkup = function (text) {
        return { __html: text };
    };
    Table.prototype.generateHead = function () {
        return (react.createElement("tr", null, this.props.tableContent.tableHeader.map(function (tableHeading, headIndex) {
            return (react.createElement("th", { key: headIndex }, tableHeading));
        })));
    };
    Table.prototype.generateBody = function () {
        var _this = this;
        return this.props.tableContent.tableBody.map(function (row, rowIndex) {
            return (react.createElement("tr", { key: rowIndex }, row.rowCols.map(function (label, colIndex) {
                return (react.createElement("td", { key: colIndex, dangerouslySetInnerHTML: _this.createMarkup(label) }));
            })));
        });
    };
    Table.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "table-" + id;
        };
        var tableId = this.props.tableId;
        if (!tableId)
            tableId = generateId();
        return (react.createElement("table", { "data-testid": "table", className: "table", id: tableId },
            react.createElement("thead", null, this.generateHead()),
            react.createElement("tbody", null, this.generateBody())));
    };
    return Table;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Toggle/Toggle.tsx
var Toggle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Toggle = /** @class */ (function (_super) {
    Toggle_extends(Toggle, _super);
    function Toggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toggle.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "toggle-" + id;
        };
        var toggleName = this.props.toggleId;
        if (!toggleName)
            toggleName = generateId();
        return (react.createElement("div", { "data-testid": "toggle", className: "toggle" },
            react.createElement("p", { className: "title" }, this.props.toggleLabel),
            react.createElement("label", { htmlFor: toggleName, className: "toggle-label" },
                react.createElement("input", { type: "checkbox", className: "toggle-input", name: toggleName, id: toggleName, hidden: true }),
                react.createElement("div", { className: "toggle-group" },
                    react.createElement("span", { className: "toggle-checked" })))));
    };
    return Toggle;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Tooltip/Tooltip.tsx
var Tooltip_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Tooltip = /** @class */ (function (_super) {
    Tooltip_extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        return (react.createElement("div", { "data-testid": "tooltip", className: "tooltip" },
            react.createElement("p", null, this.props.label),
            react.createElement("span", { className: "tooltip-text" }, this.props.tooltip)));
    };
    return Tooltip;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Atoms/Separator/Separator.tsx
var Separator_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Separator = /** @class */ (function (_super) {
    Separator_extends(Separator, _super);
    function Separator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Separator.prototype.render = function () {
        return (react.createElement("div", { className: "my-" + this.props.size.toString() }));
    };
    return Separator;
}(react.Component));
/* harmony default export */ const Separator_Separator = ((/* unused pure expression or super */ null && (Separator)));


;// CONCATENATED MODULE: ./src/Components/Molecules/Accordion/Accordion.tsx
var Accordion_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Accordion = /** @class */ (function (_super) {
    Accordion_extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accordion.prototype.render = function () {
        return (react.createElement("div", { "data-testid": "accordion", className: "accordion" }, this.props.accordionContent.map(function (item, index) { return (react.createElement("div", { key: index, className: "tab" },
            react.createElement("input", { type: "checkbox", id: "accordion-" + index }),
            react.createElement("label", { className: "tab-label", htmlFor: "accordion-" + index }, item.title),
            react.createElement("div", { className: "tab-content" },
                react.createElement("p", null, item.content)))); })));
    };
    return Accordion;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/Breadcrumbs/Breadcrumbs.tsx
var Breadcrumbs_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Breadcrumbs = /** @class */ (function (_super) {
    Breadcrumbs_extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumbs.prototype.render = function () {
        var _this = this;
        return (react.createElement("div", { className: "container-fluid breadcrumbs" },
            react.createElement("div", { className: "container" },
                react.createElement("div", { className: "row" },
                    react.createElement("div", { className: "col-12" },
                        react.createElement("span", null, this.props.breadcrumbs.map(function (bc, index) {
                            return (react.createElement(react.Fragment, { key: index },
                                react.createElement("a", { href: bc.breadcrumbLink, className: "breadcrumb" },
                                    react.createElement("i", { className: "las la-home xxs" }),
                                    bc.breadcrumbLabel),
                                index <= _this.props.breadcrumbs.length - 1 &&
                                    react.createElement("span", { className: "breadcrumb__spacer" },
                                        react.createElement("i", { className: "las la-angle-right xxs" }))));
                        })))))));
    };
    return Breadcrumbs;
}(react.Component));
/* harmony default export */ const Breadcrumbs_Breadcrumbs = ((/* unused pure expression or super */ null && (Breadcrumbs)));


;// CONCATENATED MODULE: ./src/Components/Molecules/Pagination/Pagination.tsx
var Pagination_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Pagination = /** @class */ (function (_super) {
    Pagination_extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, pages = _a.pages, currentPage = _a.currentPage;
        return (react.createElement("ul", { className: "pagination", role: "menubar", "aria-label": "Pages", "data-testid": "pagination" },
            currentPage > 1 && pages.length > 1 &&
                react.createElement("li", { className: "previous", role: "menuitem" },
                    react.createElement("a", { href: pages[0].link },
                        react.createElement("i", { className: "las la-arrow-circle-left" }),
                        react.createElement("span", { className: "sr-only" }, "Previous page"))),
            pages.map(function (page, index) {
                var pageNum = index + 1, isCurrent = (pageNum == currentPage) ? true : false, pageLabel = (isCurrent) ? "Current Page, Page " + pageNum : "Goto Page " + pageNum;
                return (react.createElement("li", { key: index, className: (isCurrent) ? 'current' : '', role: "menuitem" },
                    react.createElement("a", { href: page.link, "aria-label": pageLabel, "aria-current": isCurrent }, pageNum)));
            }),
            currentPage < pages.length &&
                react.createElement("li", { className: "next", role: "menuitem" },
                    react.createElement("a", { href: pages[pages.length - 1].link },
                        react.createElement("i", { className: "las la-arrow-circle-right" }),
                        react.createElement("span", { className: "sr-only" }, "Next page")))));
    };
    return Pagination;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/ProgressBar/ProgressBar.tsx
var ProgressBar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProgressBar = /** @class */ (function (_super) {
    ProgressBar_extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var generateId = function () {
            var id = Math.random().toString(36).substring(7);
            return "progress-" + id;
        };
        var progressId = this.props.progressId;
        if (!progressId)
            progressId = generateId();
        return (react.createElement("div", { "data-testid": "progress-bar", className: "progress-bar" },
            react.createElement("ol", { className: "progress-steps" }, this.props.progressSteps.map(function (item, index) {
                var itemClass = 'count';
                if (item.complete)
                    itemClass += ' completed';
                return (react.createElement("li", { key: index, className: "progress-step" },
                    react.createElement("span", { className: itemClass }),
                    react.createElement("span", { className: "description" }, item.label)));
            }))));
    };
    return ProgressBar;
}(react.Component));
/* harmony default export */ const ProgressBar_ProgressBar = ((/* unused pure expression or super */ null && (ProgressBar)));


;// CONCATENATED MODULE: ./src/Components/Molecules/PageAlert/PageAlert.tsx
var PageAlert_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PageAlert = /** @class */ (function (_super) {
    PageAlert_extends(PageAlert, _super);
    function PageAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageAlert.prototype.getIcon = function (status) {
        var icon = 'la-check';
        switch (status) {
            case 'success':
                {
                    icon = 'la-check';
                }
                break;
            case 'info':
                {
                    icon = 'la-info';
                }
                break;
            case 'warning':
                {
                    icon = 'la-exclamation';
                }
                break;
            case 'error':
                {
                    icon = 'la-times';
                }
                break;
        }
        return icon;
    };
    PageAlert.prototype.close = function () {
        this.setState({ open: false });
    };
    PageAlert.prototype.render = function () {
        var _a = this.props, title = _a.title, message = _a.message, status = _a.status;
        var icon = this.getIcon(status);
        return (react.createElement("div", { className: "page-alert " + status },
            react.createElement("div", { className: "alert-icon" },
                react.createElement("i", { className: "las xxs " + icon })),
            react.createElement("div", { className: "alert-content" },
                react.createElement("p", { className: "alert-content--title" }, title),
                react.createElement("p", { className: "alert-content--message" }, message)),
            react.createElement("i", { className: "alert-close las la-times xs" })));
    };
    PageAlert.defaultProps = {
        status: 'success'
    };
    return PageAlert;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/StackedContent/StackedContentTwo.tsx
var StackedContentTwo_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StackedContentTwo = /** @class */ (function (_super) {
    StackedContentTwo_extends(StackedContentTwo, _super);
    function StackedContentTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedContentTwo.prototype.render = function () {
        var _a = this.props, className = _a.className, backgroundColors = _a.backgroundColors, foregroundColors = _a.foregroundColors, content = _a.content;
        return (react.createElement("div", { className: "stacked-content " + (className ? className : "") },
            react.createElement("div", { className: "content-box" + (!content[0] ? " content-box--empty" : "") + " box-1 col-12 col-md-10", style: { background: "" + backgroundColors[0] } },
                react.createElement("div", { className: "col-12 col-md-7 col-lg-5 " + (foregroundColors[0] == "inverted" ? "inverted" : "") }, content[0])),
            react.createElement("div", { className: "content-box" + (!content[1] ? " content-box--empty" : "") + " box-2 col-12 col-md-6 offset-md-6 col-lg-7 offset-lg-5", style: { background: "" + backgroundColors[1] } },
                react.createElement("div", { className: "col-12 col-lg-10 " + (foregroundColors[1] == "inverted" ? "inverted" : "") }, content[1]))));
    };
    return StackedContentTwo;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/StackedContent/StackedContentThree.tsx
var StackedContentThree_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StackedContentThree = /** @class */ (function (_super) {
    StackedContentThree_extends(StackedContentThree, _super);
    function StackedContentThree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedContentThree.prototype.render = function () {
        var _a = this.props, className = _a.className, backgroundColors = _a.backgroundColors, foregroundColors = _a.foregroundColors, content = _a.content;
        return (react.createElement("div", { className: "stacked-content " + (className ? className : "") },
            react.createElement("div", { className: "content-box" + (!content[0] ? " content-box--empty" : "") + " box-1 col-12 col-md-10", style: { background: "" + backgroundColors[0] } },
                react.createElement("div", { className: "col-12 col-md-7 col-lg-5 " + (foregroundColors[0] == "inverted" ? "inverted" : "") }, content[0])),
            react.createElement("div", { className: "content-box" + (!content[1] ? " content-box--empty" : "") + " box-2 col-12 col-md-6 offset-md-6 col-lg-7 offset-lg-5", style: { background: "" + backgroundColors[1] } },
                react.createElement("div", { className: "col-12 col-lg-10 " + (foregroundColors[1] == "inverted" ? "inverted" : "") }, content[1])),
            react.createElement("div", { className: "content-box" + (!content[2] ? " content-box--empty" : "") + " box-3 col-12 col-md-6 offset-md-1 col-lg-7 offset-lg-2", style: { background: "" + backgroundColors[2] } },
                react.createElement("div", { className: "col-12 col-lg-10 " + (foregroundColors[2] == "inverted" ? "inverted" : "") }, content[2]))));
    };
    return StackedContentThree;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/StackedContent/StackedContentFour.tsx
var StackedContentFour_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StackedContentFour = /** @class */ (function (_super) {
    StackedContentFour_extends(StackedContentFour, _super);
    function StackedContentFour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedContentFour.prototype.render = function () {
        var className = this.props.className;
        return (react.createElement("div", { className: "stacked-content " + (className ? className : "") }, "//TODO: Implement 4 stacked content boxes"));
    };
    return StackedContentFour;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Molecules/StackedContent/StackedContent.tsx
var StackedContent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var StackedContent = /** @class */ (function (_super) {
    StackedContent_extends(StackedContent, _super);
    function StackedContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderStackedContent = function () {
            var _a = _this.props, className = _a.className, backgroundColors = _a.backgroundColors, foregroundColors = _a.foregroundColors, content = _a.content;
            var stackedContent;
            switch (content.length) {
                case 2:
                    stackedContent =
                        react.createElement(StackedContentTwo, { className: className, backgroundColors: [backgroundColors[0], backgroundColors[1]], foregroundColors: [foregroundColors[0], foregroundColors[1]], content: [content[0], content[1]] });
                    break;
                case 3:
                    stackedContent =
                        react.createElement(StackedContentThree, { className: className, backgroundColors: [backgroundColors[0], backgroundColors[1], backgroundColors[2]], foregroundColors: [foregroundColors[0], foregroundColors[1], foregroundColors[2]], content: [content[0], content[1], content[2]] });
                    break;
                case 4:
                    stackedContent =
                        react.createElement(StackedContentFour, { className: className, backgroundColors: [backgroundColors[0], backgroundColors[1], backgroundColors[2], backgroundColors[3]], foregroundColors: [foregroundColors[0], foregroundColors[1], foregroundColors[2], foregroundColors[3]], content: [content[0], content[1], content[2], content[3]] });
                    break;
            }
            return stackedContent;
        };
        return _this;
    }
    StackedContent.prototype.render = function () {
        return (this.renderStackedContent());
    };
    return StackedContent;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Organisms/Card/Card.tsx
var Card_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Card = /** @class */ (function (_super) {
    Card_extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.getMonthString = function (d) {
        var days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return days[d.getMonth()];
    };
    Card.prototype.render = function () {
        var _a = this.props, image = _a.image, fullImage = _a.fullImage, wide = _a.wide, date = _a.date, topic = _a.topic, heading = _a.heading, body = _a.body, callToActionText = _a.callToActionText, callToActionLink = _a.callToActionLink;
        return (react.createElement("div", { className: "col-xs-12 " + (wide ? "col-sm-8" : "col-sm-4") },
            react.createElement("div", { className: "card " + ((image && fullImage) ? "full-image-card " : image ? "" : "no-image "), "data-testid": "card" },
                react.createElement("div", { className: "" + (wide ? "card wide-card" : "card-wrapper"), style: wide ? {} : {
                        backgroundImage: "url(" + image + ")"
                    } },
                    date &&
                        react.createElement("div", { className: "date" },
                            react.createElement("span", { className: "day" }, date.getDay()),
                            react.createElement("span", { className: "month" }, this.getMonthString(date)),
                            react.createElement("span", { className: "year" }, date.getFullYear())),
                    react.createElement("div", { className: "content" },
                        topic && react.createElement("p", { className: "" + (fullImage ? "inverted" : "") }, topic),
                        heading && react.createElement("h3", { className: "" + (fullImage ? "inverted" : "") }, heading),
                        body && react.createElement("p", { className: "" + (fullImage ? "inverted" : "") }, body),
                        callToActionText && callToActionLink &&
                            react.createElement("div", { className: "button-container" },
                                react.createElement("button", { className: "cta {" + (fullImage ? " inverted" : "") }, callToActionText))),
                    wide && image &&
                        react.createElement("div", { className: "card-image", style: {
                                backgroundImage: "url(" + image + ")"
                            } })))));
    };
    return Card;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Organisms/Footer/Footer.tsx
var Footer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Footer = /** @class */ (function (_super) {
    Footer_extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, footerLists = _a.footerLists, socialLinks = _a.socialLinks, copyright = _a.copyright;
        return (react.createElement("div", { className: "container-fluid footer-container" },
            react.createElement("footer", null,
                react.createElement("div", { className: "container" },
                    react.createElement("div", { className: "row" },
                        footerLists.map(function (fl, index) {
                            return (react.createElement(react.Fragment, { key: index },
                                react.createElement("div", { className: "col-xs-6 col-md-3" },
                                    react.createElement("p", null, fl.heading),
                                    react.createElement("ul", null, fl.footerLinks.map(function (link, index) {
                                        return (react.createElement(react.Fragment, { key: index },
                                            react.createElement("li", null,
                                                react.createElement("a", { href: link.footerLink }, link.footerlabel))));
                                    })))));
                        }),
                        socialLinks &&
                            react.createElement("div", { className: "col-xs-6 col-md-3" },
                                react.createElement("p", null, socialLinks.heading ? socialLinks.heading : "Social"),
                                socialLinks.facebook &&
                                    react.createElement("div", { className: "social-link" },
                                        react.createElement("a", { href: socialLinks.facebook, target: "_blank" },
                                            react.createElement("i", { className: "lab la-facebook inverted" }),
                                            react.createElement("p", null, "Facebook"))),
                                socialLinks.twitter &&
                                    react.createElement("div", { className: "social-link" },
                                        react.createElement("a", { href: socialLinks.twitter, target: "_blank" },
                                            react.createElement("i", { className: "lab la-twitter inverted" }),
                                            react.createElement("p", null, "Twitter"))),
                                socialLinks.instagram &&
                                    react.createElement("div", { className: "social-link" },
                                        react.createElement("a", { href: socialLinks.instagram, target: "_blank" },
                                            react.createElement("i", { className: "lab la-instagram inverted" }),
                                            react.createElement("p", null, "Instagram"))),
                                socialLinks.linkedIn &&
                                    react.createElement("div", { className: "social-link" },
                                        react.createElement("a", { href: socialLinks.linkedIn, target: "_blank" },
                                            react.createElement("i", { className: "lab la-linkedin-in inverted" }),
                                            react.createElement("p", null, "LinkedIn"))))))),
            copyright &&
                react.createElement("div", { className: "copyright" },
                    react.createElement("p", null,
                        "Copyright \u00A9 ",
                        react.createElement("a", { href: copyright.link, target: "_blank" }, copyright.name),
                        " ",
                        new Date().getFullYear().toString()))));
    };
    return Footer;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Organisms/Hero/Hero.tsx
var Hero_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hero = /** @class */ (function (_super) {
    Hero_extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.generateCta = function () {
        if (!this.props.callToAction)
            return '';
        return react.createElement("button", { className: "cta" }, this.props.callToAction.text);
    };
    Hero.prototype.renderFullWidth = function () {
        return (react.createElement("div", { className: "container hero-fluid left" },
            react.createElement("div", { className: "col-xs-12 col-sm-8 col-lg-4" },
                react.createElement("div", { className: "content " + this.props.contentPosition },
                    react.createElement("h3", null, this.props.title),
                    (this.props.content !== '') ? react.createElement("p", null, this.props.content) : '',
                    this.generateCta()))));
    };
    Hero.prototype.renderContained = function () {
        return (react.createElement("div", { className: "col-xs-10 col-sm-8 col-lg-4 content " + this.props.contentPosition },
            react.createElement("h3", null, this.props.title),
            (this.props.content !== '') ? react.createElement("p", null, this.props.content) : '',
            this.generateCta()));
    };
    Hero.prototype.render = function () {
        return (react.createElement("div", { "data-testid": "hero", className: "hero" },
            react.createElement("img", { className: "hero-background", src: this.props.image.src, alt: this.props.image.alt }),
            (this.props.size === 'full') ? this.renderFullWidth() : this.renderContained()));
    };
    return Hero;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Organisms/Notification/Notification.tsx
var Notification_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Notification = /** @class */ (function (_super) {
    Notification_extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification.prototype.getNotificationIcon = function () {
        if (this.props.status === 'success') {
            return 'la-check-circle';
        }
        if (this.props.status === 'warning') {
            return 'la-exclaimation-circle';
        }
        if (this.props.status === 'error') {
            return 'la-times-circle';
        }
        return 'la-info-circle';
    };
    Notification.prototype.render = function () {
        var _a = this.props, status = _a.status, text = _a.text, callToActionLink = _a.callToActionLink, callToActionText = _a.callToActionText;
        return (react.createElement("div", { className: "container-fluid notification " + status },
            react.createElement("i", { className: "las " + this.getNotificationIcon() }),
            text &&
                react.createElement("div", { className: "text" },
                    react.createElement("p", null, text)),
            callToActionLink && callToActionText &&
                react.createElement("button", { className: "button outline-light cta sm" }, callToActionText)));
    };
    return Notification;
}(react.Component));


;// CONCATENATED MODULE: ./src/Components/Organisms/Carousel/Carousel.tsx
var Carousel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

__webpack_require__(897);
var Carousel = /** @class */ (function (_super) {
    Carousel_extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        // Moves across the array of slides
        _this.goToNextSlide = function () {
            var slides = _this.props.slides;
            var visibleSlideIndex = _this.state.visibleSlideIndex;
            // If we are at the last slide, wrap around to the first slide
            if (visibleSlideIndex == slides.length - 1) {
                _this.setState({
                    visibleSlideIndex: 0
                });
                // Otherwise just go forward a slide
            }
            else {
                _this.setState({
                    visibleSlideIndex: visibleSlideIndex + 1
                });
            }
        };
        // Moves across the array of slides
        _this.goToPreviousSlide = function () {
            var slides = _this.props.slides;
            var visibleSlideIndex = _this.state.visibleSlideIndex;
            // If we are at the first slide, wrap around to the last slide
            if (visibleSlideIndex == 0) {
                _this.setState({
                    visibleSlideIndex: slides.length - 1
                });
                // Otherwise just go back a slide
            }
            else {
                _this.setState({
                    visibleSlideIndex: visibleSlideIndex - 1
                });
            }
        };
        // Move to specific slide based on index parameter
        _this.goToSpecificSlide = function (index) {
            _this.clearIntervalTimer();
            // Update the currently visible index value
            _this.setState({
                visibleSlideIndex: index
            });
            // When going to a specific slide, make sure to reset the interval to avoid images swapping right away
            _this.restartIntervalTimer();
        };
        // Play carousel
        _this.playCarousel = function () {
            var playPause = document.querySelector('.play-pause');
            if (playPause) {
                _this.setState({
                    playing: true
                });
                _this.restartIntervalTimer();
                _this.swapPlayPauseIcon();
            }
        };
        // Pause carousel
        _this.pauseCarousel = function () {
            var playPause = document.querySelector('.play-pause');
            var playPauseIcon = document.querySelector('.play-pause i');
            if (playPause && playPauseIcon) {
                _this.setState({
                    playing: false
                });
                _this.clearIntervalTimer();
                _this.swapPlayPauseIcon();
            }
        };
        // Clear the interval timer
        _this.clearIntervalTimer = function () {
            clearInterval(_this.slideInterval);
        };
        // Reset the interval timer
        _this.restartIntervalTimer = function () {
            var interval = _this.props.interval;
            var playing = _this.state.playing;
            _this.slideInterval = setInterval(_this.goToNextSlide, interval);
            // Check if currently paused, if so swap the icons over and set playing to true
            if (!playing) {
                _this.swapPlayPauseIcon();
                _this.setState({
                    playing: true
                });
            }
        };
        // Swap the play and pause icons
        _this.swapPlayPauseIcon = function () {
            var playPauseIcon = document.querySelector('.play-pause i');
            if (playPauseIcon) {
                playPauseIcon.classList.toggle("la-pause-circle");
                playPauseIcon.classList.toggle("la-play-circle");
            }
        };
        _this.state = {
            playing: true,
            visibleSlideIndex: 0
        };
        return _this;
    }
    Carousel.prototype.componentDidMount = function () {
        var _this = this;
        var interval = this.props.interval;
        var playing = this.state.playing;
        // Get rendered elements
        var nextSlide = document.querySelector('.next-slide');
        var previousSlide = document.querySelector('.previous-slide');
        var playPause = document.querySelector('.play-pause');
        var dots = document.querySelectorAll('.carousel-dot');
        // Set the interval timer for the first time
        this.slideInterval = setInterval(this.goToNextSlide, interval);
        // Add click listener for play/pause button
        if (playPause) {
            playPause.addEventListener('click', function () {
                playing ? _this.pauseCarousel() : _this.playCarousel();
            });
        }
        // Loop through dots and create a click listener for each one
        if (dots) {
            var _loop_1 = function (i) {
                // Assign a click listener to each dot to select the specific index
                dots[i].addEventListener('click', function () {
                    _this.goToSpecificSlide(i);
                });
            };
            for (var i = 0; i < dots.length; i++) {
                _loop_1(i);
            }
        }
        // Add click listener for next button to move to the next slide
        if (nextSlide) {
            nextSlide.addEventListener('click', function () {
                // Stop the current interval
                _this.clearIntervalTimer();
                _this.goToNextSlide();
                // When the next slide button is clicked, make sure to restart the interval to avoid images swapping right away
                _this.restartIntervalTimer();
            });
        }
        // Add click listener for previous button to move to the previous slide
        if (previousSlide) {
            previousSlide.addEventListener('click', function () {
                // Stop the current interval
                _this.clearIntervalTimer();
                _this.goToPreviousSlide();
                // When the previous slide button is clicked, make sure to restart the interval to avoid images swapping right away
                _this.restartIntervalTimer();
            });
        }
        // Add click listener for next button to move to the next slide
        document.addEventListener('swiped-right', function () {
            // Stop the current interval
            _this.clearIntervalTimer();
            _this.goToPreviousSlide();
            // When the previous slide button is clicked, make sure to restart the interval to avoid images swapping right away
            _this.restartIntervalTimer();
        });
        // Add a swipe left listener to go to move to the previous slide
        document.addEventListener('swiped-left', function () {
            // Stop the current interval
            _this.clearIntervalTimer();
            _this.goToNextSlide();
            // When the next slide button is clicked, make sure to restart the interval to avoid images swapping right away
            _this.restartIntervalTimer();
        });
    };
    Carousel.prototype.render = function () {
        var slides = this.props.slides;
        var visibleSlideIndex = this.state.visibleSlideIndex;
        return (react.createElement("div", { className: "carousel" },
            react.createElement("ul", null, slides.map(function (slide, index) {
                return react.createElement("li", { className: "carousel-slide " + (visibleSlideIndex == index ? 'visible' : '') },
                    react.createElement("img", { src: slide.image, alt: slide.altText }),
                    react.createElement("div", { className: "carousel-caption" },
                        react.createElement("h5", { className: "inverted" }, slide.captionHeading),
                        react.createElement("p", { className: "inverted" },
                            slide.captionBody,
                            ".")));
            })),
            react.createElement("div", { className: "controls" },
                react.createElement("button", { className: "previous-slide" },
                    react.createElement("i", { className: "las la-arrow-circle-left sm inverted" }),
                    react.createElement("span", { className: "sr-only" }, "Previous slide")),
                react.createElement("button", { className: "play-pause" },
                    react.createElement("i", { className: "las la-pause-circle sm inverted" }),
                    react.createElement("span", { className: "sr-only" }, "Pause")),
                react.createElement("button", { className: "next-slide" },
                    react.createElement("i", { className: "las la-arrow-circle-right sm inverted" }),
                    react.createElement("span", { className: "sr-only" }, "Next slide"))),
            react.createElement("div", { className: "carousel-dots-container" }, slides.map(function (slide, index) {
                return react.createElement("button", { className: "carousel-dot " + (visibleSlideIndex == index ? 'active' : '') });
            }))));
    };
    return Carousel;
}(react.Component));


;// CONCATENATED MODULE: ./src/helpers/scroll-lock/scroll-lock.ts
// Helpful function to enable and disable scrolling of body. Useful for when hamburger menu or modal pop up occurs.
var body = document.querySelector('body');
var scrollPosition = 0;
var scrollLock = {
    enable: function () {
        scrollPosition = window.pageYOffset;
        if (body) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = "-" + scrollPosition + "px";
            body.style.width = '100%';
        }
    },
    disable: function () {
        if (body) {
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            body.style.removeProperty('width');
        }
        window.scrollTo(0, scrollPosition);
    }
};
/* harmony default export */ const scroll_lock = (scrollLock);

;// CONCATENATED MODULE: ./src/helpers/focus-trap/focus-trap.ts
var focusTrap = {
    enable: function (modal) {
        // Add all the commonly focusable elements for inside the modal
        var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        if (modal) {
            // Get the first element that can focused inside modal
            var firstFocusableElement_1 = modal.querySelectorAll(focusableElements)[0];
            var focusableContent = modal.querySelectorAll(focusableElements);
            // Get the last element that can be focused inside modal
            var lastFocusableElement_1 = focusableContent[focusableContent.length - 1];
            document.addEventListener('keydown', function (e) {
                var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
                // Break early if key pressed is not tab
                if (!isTabPressed) {
                    return;
                }
                // If shift key pressed for shift + tab combination
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement_1) {
                        // Set focus on the the last focusable element
                        lastFocusableElement_1.focus();
                        e.preventDefault();
                    }
                    // If tab key is pressed
                }
                else {
                    // If focus has reached the last focusable element then return focus to the first focusable element
                    if (document.activeElement === lastFocusableElement_1) {
                        firstFocusableElement_1.focus();
                        e.preventDefault();
                    }
                }
            });
            // Set focus to first focusable element within the modal
            firstFocusableElement_1.focus();
        }
    },
    // Remove key listener for tab behaviour
    disable: function (priorFocusedElement) {
        document.removeEventListener('keydown', function () {
            // Restore focus back to element which was focused prior to modal
            if (priorFocusedElement) {
                priorFocusedElement.focus();
            }
        });
    }
};
/* harmony default export */ const focus_trap = (focusTrap);

;// CONCATENATED MODULE: ./src/Components/Organisms/Modal/Modal.tsx
var Modal_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Modal = /** @class */ (function (_super) {
    Modal_extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            visible: _this.props.visible
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, visible = _a.visible, closeModalCallBack = _a.closeModalCallBack;
        var modal = document.querySelector(".modal");
        var modalCover = document.querySelector(".modal-cover");
        var modalClose = document.querySelector(".close-modal");
        // Get the prior focused element before the modal is opened
        var priorFocusedElement = document.activeElement && document.activeElement;
        if (modal && visible) {
            // Lock the scrollability of body
            scroll_lock.enable();
            // Lock the focus to elements within the modal and focus on first element
            focus_trap.enable(modal);
        }
        if (modalCover && modalClose && priorFocusedElement) {
            modalClose.addEventListener("click", function () {
                // Unlock the scrollability of body
                scroll_lock.disable();
                // Remove lock on focus within modal elements
                focus_trap.disable(priorFocusedElement);
                // Hide modal by call backing to parent compontent
                closeModalCallBack();
                // Fall back for if callback is not supplied, update the state to hide modal
                _this.setState({
                    visible: false
                });
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, modalStyle = _a.modalStyle, image = _a.image, altText = _a.altText, heading = _a.heading, body = _a.body, callToActionLink = _a.callToActionLink, callToActionText = _a.callToActionText;
        var visible = this.state.visible;
        return (visible &&
            react.createElement("div", { className: "modal-cover" },
                react.createElement("div", { className: "modal", role: "dialog", "aria-labelledby": "modal-heading", "aria-describedby": "modal-body", "aria-modal": "true" },
                    react.createElement("button", { className: "close-modal" },
                        react.createElement("i", { className: "las la-times sm inverted" })),
                    react.createElement("div", { className: "modal-content " + modalStyle }, modalStyle !== "side-by-side" && modalStyle !== "top-to-bottom" ?
                        react.createElement("div", { className: "modal-content-wrapper", role: "img", "aria-label": altText, style: {
                                backgroundImage: "url(" + image + ")"
                            } },
                            react.createElement("div", { className: "content" },
                                react.createElement("h3", { id: "modal-heading", className: "" + (modalStyle == "full-image" ? 'inverted' : '') }, heading),
                                react.createElement("p", { id: "modal-body", className: "" + (modalStyle == "full-image" ? 'inverted' : '') }, body),
                                react.createElement("div", { className: "button-container" },
                                    react.createElement("a", { className: "button cta " + (modalStyle == "full-image" ? 'inverted' : ''), href: callToActionLink }, callToActionText))))
                        :
                            react.createElement(react.Fragment, null,
                                react.createElement("div", { className: "content" },
                                    react.createElement("h3", { id: "modal-heading" }, heading),
                                    react.createElement("p", { id: "modal-body" }, body),
                                    react.createElement("div", { className: "button-container" },
                                        react.createElement("a", { className: "button cta", href: callToActionLink }, callToActionText))),
                                react.createElement("div", { className: "image", role: "img", "aria-label": altText, style: {
                                        backgroundImage: "url(" + image + ")"
                                    } }))))));
    };
    return Modal;
}(react.Component));


// EXTERNAL MODULE: ./src/libs/vanillajs-datepicker/@types/Datepicker.js
var Datepicker = __webpack_require__(942);
var Datepicker_default = /*#__PURE__*/__webpack_require__.n(Datepicker);
// EXTERNAL MODULE: ./src/libs/vanillajs-datepicker/@types/DateRangePicker.js
var DateRangePicker = __webpack_require__(273);
;// CONCATENATED MODULE: ./src/Components/Organisms/DatePicker/DatePicker.tsx
var DatePicker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DatePicker = /** @class */ (function (_super) {
    DatePicker_extends(DatePicker, _super);
    function DatePicker(props) {
        return _super.call(this, props) || this;
    }
    DatePicker.prototype.componentDidMount = function () {
        // Initialise either a date or date range picker
        if (this.props.type == "date") {
            var datePickerField = document.querySelector('.date-picker');
            if (datePickerField) {
                new (Datepicker_default())(datePickerField, {});
            }
        }
        else if (this.props.type == "range") {
            var dateRangePickerField = document.querySelector('.date-range-picker');
            if (dateRangePickerField) {
                new DateRangePicker/* default */.Z(dateRangePickerField, {});
            }
        }
    };
    DatePicker.prototype.render = function () {
        var _a = this.props, type = _a.type, label = _a.label, className = _a.className, id = _a.id;
        return (type == "date" ?
            react.createElement(react.Fragment, null,
                react.createElement("label", { htmlFor: id }, label),
                react.createElement("input", { type: "text", className: "date-picker " + (className ? className : ""), id: id }))
            :
                type == "range" &&
                    react.createElement("div", { id: id, className: "date-range-picker " + (className ? className : "") },
                        react.createElement("label", { htmlFor: id }, label),
                        react.createElement("input", { className: "from-date", type: "text", name: "start" }),
                        react.createElement("span", null, "to"),
                        react.createElement("input", { className: "to-date", type: "text", name: "end" })));
    };
    return DatePicker;
}(react.Component));


;// CONCATENATED MODULE: ./src/index.ts

// Export Atoms












// Export Molecules






// Export Organisms








})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map
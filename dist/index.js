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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
  "Footer": () => (/* reexport */ Footer),
  "Hero": () => (/* reexport */ Hero),
  "Icon": () => (/* reexport */ Icon),
  "Label": () => (/* reexport */ Label),
  "List": () => (/* reexport */ List),
  "Modal": () => (/* reexport */ Modal),
  "Notification": () => (/* reexport */ Notification),
  "Pagination": () => (/* reexport */ Pagination),
  "ProgressBar": () => (/* reexport */ ProgressBar),
  "Radio": () => (/* reexport */ Radio),
  "Select": () => (/* reexport */ Select),
  "Slider": () => (/* reexport */ Slider),
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
        return _super.call(this, props) || this;
    }
    Modal.prototype.componentDidMount = function () {
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
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, modalStyle = _a.modalStyle, image = _a.image, heading = _a.heading, body = _a.body, callToActionLink = _a.callToActionLink, callToActionText = _a.callToActionText, visible = _a.visible;
        return (visible &&
            react.createElement("div", { className: "modal-cover" },
                react.createElement("div", { className: "modal", role: "dialog", "aria-labelledby": "modal-heading", "aria-describedby": "modal-body", "aria-modal": "true" },
                    react.createElement("button", { className: "close-modal" },
                        react.createElement("i", { className: "las la-times sm inverted" })),
                    react.createElement("div", { className: "modal-content " + modalStyle }, modalStyle !== "side-by-side" && modalStyle !== "top-to-bottom" ?
                        react.createElement("div", { className: "modal-content-wrapper", style: {
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
                                react.createElement("div", { className: "image", style: {
                                        backgroundImage: "url(" + image + ")"
                                    } }))))));
    };
    return Modal;
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
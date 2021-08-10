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

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
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

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/Components/Atoms/Button/Button.tsx":
/*!************************************************!*\
  !*** ./src/Components/Atoms/Button/Button.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { "data-testid": "button", className: "button " + this.props.type + " " + this.props.size + " " + this.props.style + (this.props.enabled ? '' : ' disabled') }, this.props.children));
    };
    Button.defaultProps = {
        enabled: true
    };
    return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Checkbox/Checkbox.tsx":
/*!****************************************************!*\
  !*** ./src/Components/Atoms/Checkbox/Checkbox.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "checkbox", className: "checkbox" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "checkbox-label", htmlFor: checkboxId },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "checkbox-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: "checkbox-input", id: checkboxId, hidden: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "checkbox-checked" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "title" }, this.props.checkboxLabel))));
    };
    return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Icon/Icon.tsx":
/*!********************************************!*\
  !*** ./src/Components/Atoms/Icon/Icon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

{ /* <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link> */ }
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, icon = _a.icon, size = _a.size, color = _a.color;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { "data-testid": "icon", className: "icon las la-" + icon + " " + ((size) ? size : '') + " " + ((color) ? color : '') }));
    };
    return Icon;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Label/Label.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Atoms/Label/Label.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-testid": "label", className: "label label-" + this.props.labelStatus }, this.props.labelText));
    };
    return Label;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/List/List.tsx":
/*!********************************************!*\
  !*** ./src/Components/Atoms/List/List.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _this = this;
        var testId = (this.props.parent) ? 'list' : 'list-child';
        var items = this.props.listContent.map(function (item, index) {
            if (item.children) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: index },
                    item.itemText,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, { ordered: _this.props.ordered, parent: false, listContent: item.children })));
            }
            else {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: index }, item.itemText));
            }
        });
        if (this.props.ordered) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", { className: "styled-list", "data-testid": testId }, items));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "styled-list", "data-testid": testId }, items));
        }
    };
    List.defaultProps = {
        ordered: false,
        parent: true
    };
    return List;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Radio/Radio.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Atoms/Radio/Radio.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radio": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "radio", className: "radio" }, this.props.radioItems.map(function (item, index) {
            var value = item.radioValue;
            if (!value)
                value = item.radioLabel;
            var radioId = generateId();
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "radio-label", htmlFor: radioId, key: index },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "radio-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", className: "radio-input", name: radioName, id: radioId, value: value, defaultChecked: item.radioSelected, hidden: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "radio-checked" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "title" }, item.radioLabel)));
        })));
    };
    return Radio;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Select/Select.tsx":
/*!************************************************!*\
  !*** ./src/Components/Atoms/Select/Select.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "select", className: "select" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: selectId }, this.props.selectLabel),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: selectId, name: selectId }, this.props.selectItems.map(function (item, index) {
                var value = item.value;
                if (!value)
                    value = item.label;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: index, value: value }, item.label));
            }))));
    };
    return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Slider/Slider.tsx":
/*!************************************************!*\
  !*** ./src/Components/Atoms/Slider/Slider.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "slider", "data-testid": "slider", htmlFor: sliderId },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "range", id: sliderId, min: min, max: max, value: value, onChange: this.handleChange }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "value" }, value)));
    };
    Slider.defaultProps = {
        min: 0,
        max: 10,
        value: 0
    };
    return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Table/Table.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Atoms/Table/Table.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.createMarkup = function (text) {
        return { __html: text };
    };
    Table.prototype.generateHead = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, this.props.tableContent.tableHeader.map(function (tableHeading, headIndex) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: headIndex }, tableHeading));
        })));
    };
    Table.prototype.generateBody = function () {
        var _this = this;
        return this.props.tableContent.tableBody.map(function (row, rowIndex) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: rowIndex }, row.rowCols.map(function (label, colIndex) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: colIndex, dangerouslySetInnerHTML: _this.createMarkup(label) }));
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { "data-testid": "table", className: "table", id: tableId },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, this.generateHead()),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.generateBody())));
    };
    return Table;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Toggle/Toggle.tsx":
/*!************************************************!*\
  !*** ./src/Components/Atoms/Toggle/Toggle.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toggle": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "toggle", className: "toggle" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "title" }, this.props.toggleLabel),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: toggleName, className: "toggle-label" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: "toggle-input", name: toggleName, id: toggleName, hidden: true }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "toggle-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "toggle-checked" })))));
    };
    return Toggle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Atoms/Tooltip/Tooltip.tsx":
/*!**************************************************!*\
  !*** ./src/Components/Atoms/Tooltip/Tooltip.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "tooltip", className: "tooltip" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.label),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tooltip-text" }, this.props.tooltip)));
    };
    return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Molecules/Accordion/Accordion.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/Molecules/Accordion/Accordion.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accordion.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "accordion", className: "accordion" }, this.props.accordionContent.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: index, className: "tab" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", id: "accordion-" + index }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "tab-label", htmlFor: "accordion-" + index }, item.title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.content)))); })));
    };
    return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Molecules/Breadcrumbs/Breadcrumbs.tsx":
/*!**************************************************************!*\
  !*** ./src/Components/Molecules/Breadcrumbs/Breadcrumbs.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Breadcrumbs = /** @class */ (function (_super) {
    __extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumbs.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container-fluid breadcrumbs" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-12" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.breadcrumbs.map(function (bc, index) {
                            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: bc.breadcrumbLink, className: "breadcrumb" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-home xxs" }),
                                    bc.breadcrumbLabel),
                                index <= _this.props.breadcrumbs.length - 1 &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "breadcrumb__spacer" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-angle-right xxs" }))));
                        })))))));
    };
    return Breadcrumbs;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);



/***/ }),

/***/ "./src/Components/Molecules/PageAlert/PageAlert.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/Molecules/PageAlert/PageAlert.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAlert": () => (/* binding */ PageAlert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var PageAlert = /** @class */ (function (_super) {
    __extends(PageAlert, _super);
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
    PageAlert.prototype.render = function () {
        var _a = this.props, title = _a.title, message = _a.message, status = _a.status;
        var icon = this.getIcon(status);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "page-alert " + status },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "alert-icon" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las xxs " + icon })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "alert-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "alert-content--title" }, title),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "alert-content--message" }, message)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "alert-close las la-times xs" })));
    };
    PageAlert.defaultProps = {
        status: 'success'
    };
    return PageAlert;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Molecules/Pagination/Pagination.tsx":
/*!************************************************************!*\
  !*** ./src/Components/Molecules/Pagination/Pagination.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, pages = _a.pages, currentPage = _a.currentPage;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "pagination", role: "menubar", "aria-label": "Pages", "data-testid": "pagination" },
            currentPage > 1 && pages.length > 1 &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "previous", role: "menuitem" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: pages[0].link },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-arrow-circle-left" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sr-only" }, "Previous page"))),
            pages.map(function (page, index) {
                var pageNum = index + 1, isCurrent = (pageNum == currentPage) ? true : false, pageLabel = (isCurrent) ? "Current Page, Page " + pageNum : "Goto Page " + pageNum;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: index, className: (isCurrent) ? 'current' : '', role: "menuitem" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: page.link, "aria-label": pageLabel, "aria-current": isCurrent }, pageNum)));
            }),
            currentPage < pages.length &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "next", role: "menuitem" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: pages[pages.length - 1].link },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-arrow-circle-right" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sr-only" }, "Next page")))));
    };
    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Molecules/ProgressBar/ProgressBar.tsx":
/*!**************************************************************!*\
  !*** ./src/Components/Molecules/ProgressBar/ProgressBar.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ProgressBar": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "progress-bar", className: "progress-bar" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", { className: "progress-steps" }, this.props.progressSteps.map(function (item, index) {
                var itemClass = 'count';
                if (item.complete)
                    itemClass += ' completed';
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: index, className: "progress-step" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: itemClass }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "description" }, item.label)));
            }))));
    };
    return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);



/***/ }),

/***/ "./src/Components/Organisms/Card/Card.tsx":
/*!************************************************!*\
  !*** ./src/Components/Organisms/Card/Card.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.getMonthString = function (d) {
        var days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return days[d.getMonth()];
    };
    Card.prototype.render = function () {
        var _a = this.props, image = _a.image, fullImage = _a.fullImage, wide = _a.wide, date = _a.date, topic = _a.topic, heading = _a.heading, body = _a.body, callToActionText = _a.callToActionText, callToActionLink = _a.callToActionLink;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-xs-12 " + (wide ? "col-sm-8" : "col-sm-4") },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card " + ((image && fullImage) ? "full-image-card " : image ? "" : "no-image "), "data-testid": "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "" + (wide ? "card wide-card" : "card-wrapper"), style: wide ? {} : {
                        backgroundImage: "url(" + image + ")"
                    } },
                    date &&
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "date" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "day" }, date.getDay()),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "month" }, this.getMonthString(date)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "year" }, date.getFullYear())),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
                        topic && react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "" + (fullImage ? "inverted" : "") }, topic),
                        heading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "" + (fullImage ? "inverted" : "") }, heading),
                        body && react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "" + (fullImage ? "inverted" : "") }, body),
                        callToActionText && callToActionLink &&
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "button-container" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "cta {" + (fullImage ? " inverted" : "") }, callToActionText))),
                    wide && image &&
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-image", style: {
                                backgroundImage: "url(" + image + ")"
                            } })))));
    };
    return Card;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Organisms/Carousel/Carousel.tsx":
/*!********************************************************!*\
  !*** ./src/Components/Organisms/Carousel/Carousel.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

__webpack_require__(/*! ../../../libs/swiped-events-1.1.4/swiped-events.min.js */ "./src/libs/swiped-events-1.1.4/swiped-events.min.js");
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "carousel" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, slides.map(function (slide, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "carousel-slide " + (visibleSlideIndex == index ? 'visible' : '') },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: slide.image, alt: slide.altText }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "carousel-caption" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "inverted" }, slide.captionHeading),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "inverted" },
                            slide.captionBody,
                            ".")));
            })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "controls" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "previous-slide" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-arrow-circle-left sm inverted" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sr-only" }, "Previous slide")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "play-pause" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-pause-circle sm inverted" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sr-only" }, "Pause")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "next-slide" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-arrow-circle-right sm inverted" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sr-only" }, "Next slide"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "carousel-dots-container" }, slides.map(function (slide, index) {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "carousel-dot " + (visibleSlideIndex == index ? 'active' : '') });
            }))));
    };
    return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Organisms/Footer/Footer.tsx":
/*!****************************************************!*\
  !*** ./src/Components/Organisms/Footer/Footer.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props, footerLists = _a.footerLists, socialLinks = _a.socialLinks, copyright = _a.copyright;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container-fluid footer-container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                        footerLists.map(function (fl, index) {
                            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-xs-6 col-md-3" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, fl.heading),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, fl.footerLinks.map(function (link, index) {
                                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: link.footerLink }, link.footerlabel))));
                                    })))));
                        }),
                        socialLinks &&
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-xs-6 col-md-3" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, socialLinks.heading ? socialLinks.heading : "Social"),
                                socialLinks.facebook &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "social-link" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: socialLinks.facebook, target: "_blank" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "lab la-facebook inverted" }),
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Facebook"))),
                                socialLinks.twitter &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "social-link" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: socialLinks.twitter, target: "_blank" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "lab la-twitter inverted" }),
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Twitter"))),
                                socialLinks.instagram &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "social-link" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: socialLinks.instagram, target: "_blank" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "lab la-instagram inverted" }),
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Instagram"))),
                                socialLinks.linkedIn &&
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "social-link" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: socialLinks.linkedIn, target: "_blank" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "lab la-linkedin-in inverted" }),
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "LinkedIn"))))))),
            copyright &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "copyright" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                        "Copyright \u00A9 ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: copyright.link, target: "_blank" }, copyright.name),
                        " ",
                        new Date().getFullYear().toString()))));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Organisms/Hero/Hero.tsx":
/*!************************************************!*\
  !*** ./src/Components/Organisms/Hero/Hero.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.generateCta = function () {
        if (!this.props.callToAction)
            return '';
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "cta" }, this.props.callToAction.text);
    };
    Hero.prototype.renderFullWidth = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container hero-fluid left" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-xs-12 col-sm-8 col-lg-4" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content " + this.props.contentPosition },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, this.props.title),
                    (this.props.content !== '') ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.content) : '',
                    this.generateCta()))));
    };
    Hero.prototype.renderContained = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-xs-10 col-sm-8 col-lg-4 content " + this.props.contentPosition },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, this.props.title),
            (this.props.content !== '') ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.props.content) : '',
            this.generateCta()));
    };
    Hero.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "hero", className: "hero" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "hero-background", src: this.props.image.src, alt: this.props.image.alt }),
            (this.props.size === 'full') ? this.renderFullWidth() : this.renderContained()));
    };
    return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Organisms/Modal/Modal.tsx":
/*!**************************************************!*\
  !*** ./src/Components/Organisms/Modal/Modal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers_scroll_lock_scroll_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/scroll-lock/scroll-lock */ "./src/helpers/scroll-lock/scroll-lock.ts");
/* harmony import */ var _helpers_focus_trap_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/focus-trap/focus-trap */ "./src/helpers/focus-trap/focus-trap.ts");
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



var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
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
            _helpers_scroll_lock_scroll_lock__WEBPACK_IMPORTED_MODULE_1__.default.enable();
            // Lock the focus to elements within the modal and focus on first element
            _helpers_focus_trap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.default.enable(modal);
        }
        if (modalCover && modalClose && priorFocusedElement) {
            modalClose.addEventListener("click", function () {
                // Unlock the scrollability of body
                _helpers_scroll_lock_scroll_lock__WEBPACK_IMPORTED_MODULE_1__.default.disable();
                // Remove lock on focus within modal elements
                _helpers_focus_trap_focus_trap__WEBPACK_IMPORTED_MODULE_2__.default.disable(priorFocusedElement);
                // Hide modal by call backing to parent compontent
                closeModalCallBack();
            });
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, modalStyle = _a.modalStyle, image = _a.image, heading = _a.heading, body = _a.body, callToActionLink = _a.callToActionLink, callToActionText = _a.callToActionText, visible = _a.visible;
        return (visible &&
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-cover" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "close-modal" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las la-times sm inverted" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content " + (modalStyle ? modalStyle : 'no-image') }, modalStyle !== "side-by-side" ?
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content-wrapper", style: {
                                backgroundImage: "url(" + image + ")"
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "" + (modalStyle == "full-image" ? 'inverted' : '') }, heading),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "" + (modalStyle == "full-image" ? 'inverted' : '') }, body),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "button-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "button cta " + (modalStyle == "full-image" ? 'inverted' : ''), href: callToActionLink }, callToActionText))))
                        :
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, heading),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, body),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "button-container" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "button cta", href: callToActionLink }, callToActionText))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "image", style: {
                                        backgroundImage: "url(" + image + ")"
                                    } }))))));
    };
    return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/Components/Organisms/Notification/Notification.tsx":
/*!****************************************************************!*\
  !*** ./src/Components/Organisms/Notification/Notification.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container-fluid notification " + status },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "las " + this.getNotificationIcon() }),
            text &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, text)),
            callToActionLink && callToActionText &&
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "button outline-light cta sm" }, callToActionText)));
    };
    return Notification;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "./src/helpers/focus-trap/focus-trap.ts":
/*!**********************************************!*\
  !*** ./src/helpers/focus-trap/focus-trap.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (focusTrap);


/***/ }),

/***/ "./src/helpers/scroll-lock/scroll-lock.ts":
/*!************************************************!*\
  !*** ./src/helpers/scroll-lock/scroll-lock.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollLock);


/***/ }),

/***/ "./src/libs/swiped-events-1.1.4/swiped-events.min.js":
/*!***********************************************************!*\
  !*** ./src/libs/swiped-events-1.1.4/swiped-events.min.js ***!
  \***********************************************************/
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Components_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Components_Atoms_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox),
/* harmony export */   "Icon": () => (/* reexport safe */ _Components_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon),
/* harmony export */   "Label": () => (/* reexport safe */ _Components_Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_4__.Label),
/* harmony export */   "List": () => (/* reexport safe */ _Components_Atoms_List_List__WEBPACK_IMPORTED_MODULE_5__.List),
/* harmony export */   "Radio": () => (/* reexport safe */ _Components_Atoms_Radio_Radio__WEBPACK_IMPORTED_MODULE_6__.Radio),
/* harmony export */   "Select": () => (/* reexport safe */ _Components_Atoms_Select_Select__WEBPACK_IMPORTED_MODULE_7__.Select),
/* harmony export */   "Slider": () => (/* reexport safe */ _Components_Atoms_Slider_Slider__WEBPACK_IMPORTED_MODULE_8__.Slider),
/* harmony export */   "Table": () => (/* reexport safe */ _Components_Atoms_Table_Table__WEBPACK_IMPORTED_MODULE_9__.Table),
/* harmony export */   "Toggle": () => (/* reexport safe */ _Components_Atoms_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_10__.Toggle),
/* harmony export */   "Tooltip": () => (/* reexport safe */ _Components_Atoms_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip),
/* harmony export */   "Accordion": () => (/* reexport safe */ _Components_Molecules_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_12__.Accordion),
/* harmony export */   "Breadcrumbs": () => (/* reexport safe */ _Components_Molecules_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__.Breadcrumbs),
/* harmony export */   "Pagination": () => (/* reexport safe */ _Components_Molecules_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_14__.Pagination),
/* harmony export */   "ProgressBar": () => (/* reexport safe */ _Components_Molecules_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_15__.ProgressBar),
/* harmony export */   "PageAlert": () => (/* reexport safe */ _Components_Molecules_PageAlert_PageAlert__WEBPACK_IMPORTED_MODULE_16__.PageAlert),
/* harmony export */   "Card": () => (/* reexport safe */ _Components_Organisms_Card_Card__WEBPACK_IMPORTED_MODULE_17__.Card),
/* harmony export */   "Footer": () => (/* reexport safe */ _Components_Organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_18__.Footer),
/* harmony export */   "Hero": () => (/* reexport safe */ _Components_Organisms_Hero_Hero__WEBPACK_IMPORTED_MODULE_19__.Hero),
/* harmony export */   "Notification": () => (/* reexport safe */ _Components_Organisms_Notification_Notification__WEBPACK_IMPORTED_MODULE_20__.Notification),
/* harmony export */   "Carousel": () => (/* reexport safe */ _Components_Organisms_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_21__.Carousel),
/* harmony export */   "Modal": () => (/* reexport safe */ _Components_Organisms_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__.Modal)
/* harmony export */ });
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _Components_Atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Atoms/Button/Button */ "./src/Components/Atoms/Button/Button.tsx");
/* harmony import */ var _Components_Atoms_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Atoms/Checkbox/Checkbox */ "./src/Components/Atoms/Checkbox/Checkbox.tsx");
/* harmony import */ var _Components_Atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Atoms/Icon/Icon */ "./src/Components/Atoms/Icon/Icon.tsx");
/* harmony import */ var _Components_Atoms_Label_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Atoms/Label/Label */ "./src/Components/Atoms/Label/Label.tsx");
/* harmony import */ var _Components_Atoms_List_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Atoms/List/List */ "./src/Components/Atoms/List/List.tsx");
/* harmony import */ var _Components_Atoms_Radio_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Atoms/Radio/Radio */ "./src/Components/Atoms/Radio/Radio.tsx");
/* harmony import */ var _Components_Atoms_Select_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Atoms/Select/Select */ "./src/Components/Atoms/Select/Select.tsx");
/* harmony import */ var _Components_Atoms_Slider_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Atoms/Slider/Slider */ "./src/Components/Atoms/Slider/Slider.tsx");
/* harmony import */ var _Components_Atoms_Table_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/Atoms/Table/Table */ "./src/Components/Atoms/Table/Table.tsx");
/* harmony import */ var _Components_Atoms_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Atoms/Toggle/Toggle */ "./src/Components/Atoms/Toggle/Toggle.tsx");
/* harmony import */ var _Components_Atoms_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Atoms/Tooltip/Tooltip */ "./src/Components/Atoms/Tooltip/Tooltip.tsx");
/* harmony import */ var _Components_Molecules_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/Molecules/Accordion/Accordion */ "./src/Components/Molecules/Accordion/Accordion.tsx");
/* harmony import */ var _Components_Molecules_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Molecules/Breadcrumbs/Breadcrumbs */ "./src/Components/Molecules/Breadcrumbs/Breadcrumbs.tsx");
/* harmony import */ var _Components_Molecules_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Molecules/Pagination/Pagination */ "./src/Components/Molecules/Pagination/Pagination.tsx");
/* harmony import */ var _Components_Molecules_ProgressBar_ProgressBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/Molecules/ProgressBar/ProgressBar */ "./src/Components/Molecules/ProgressBar/ProgressBar.tsx");
/* harmony import */ var _Components_Molecules_PageAlert_PageAlert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/Molecules/PageAlert/PageAlert */ "./src/Components/Molecules/PageAlert/PageAlert.tsx");
/* harmony import */ var _Components_Organisms_Card_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/Organisms/Card/Card */ "./src/Components/Organisms/Card/Card.tsx");
/* harmony import */ var _Components_Organisms_Footer_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Organisms/Footer/Footer */ "./src/Components/Organisms/Footer/Footer.tsx");
/* harmony import */ var _Components_Organisms_Hero_Hero__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/Organisms/Hero/Hero */ "./src/Components/Organisms/Hero/Hero.tsx");
/* harmony import */ var _Components_Organisms_Notification_Notification__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/Organisms/Notification/Notification */ "./src/Components/Organisms/Notification/Notification.tsx");
/* harmony import */ var _Components_Organisms_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/Organisms/Carousel/Carousel */ "./src/Components/Organisms/Carousel/Carousel.tsx");
/* harmony import */ var _Components_Organisms_Modal_Modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/Organisms/Modal/Modal */ "./src/Components/Organisms/Modal/Modal.tsx");

// Export Atoms











// Export Molecules





// Export Organisms







})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map
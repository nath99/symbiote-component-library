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

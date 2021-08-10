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

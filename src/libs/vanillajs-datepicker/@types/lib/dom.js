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

"use strict";

exports.isObject = isObject;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
function isObject(item) {
    return typeof item === "object" && !Array.isArray(item) && item !== null;
}


function isDate(value) {
    return isObject(value) && Object.prototype.toString.call(value) === "[object Date]";
}


function isRegExp(value) {
    return isObject(value) && Object.prototype.toString.call(value) === "[object RegExp]";
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
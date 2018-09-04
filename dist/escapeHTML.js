"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /[&<>"]/g;
var charToEscapedMap = Object.create(null);
charToEscapedMap['&'] = '&amp;';
charToEscapedMap['<'] = '&lt;';
charToEscapedMap['>'] = '&gt;';
charToEscapedMap['"'] = '&quot;';
function escapeHTML(str) {
    return str
        ? reEscapableChars.test(str)
            ? str.replace(reEscapableChars, function (chr) { return charToEscapedMap[chr]; })
            : str
        : null;
}
exports.escapeHTML = escapeHTML;

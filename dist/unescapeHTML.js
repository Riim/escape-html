"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableEntities = /&(?:amp|lt|gt|quot);/g;
var escapedToCharMap = Object.create(null);
escapedToCharMap['&amp;'] = '&';
escapedToCharMap['&lt;'] = '<';
escapedToCharMap['&gt;'] = '>';
escapedToCharMap['&quot;'] = '"';
function unescapeHTML(str) {
    return str
        ? reEscapableEntities.test(str)
            ? str.replace(reEscapableEntities, function (entity) { return escapedToCharMap[entity]; })
            : str
        : null;
}
exports.unescapeHTML = unescapeHTML;

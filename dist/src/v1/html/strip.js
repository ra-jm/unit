"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripTags(html) {
    try {
        const strippedString = html.replace(/(<([^>]+)>)/gi, "");
        return strippedString;
    }
    catch (error) {
        throw error;
    }
}
exports.default = stripTags;

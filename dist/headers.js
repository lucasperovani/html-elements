"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = void 0;
const builder_1 = require("./builder");
/**
 * Create a H1 HTML element string.
 *
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 *
 * @returns The H1 HTML element string.
 */
function h1(id, classes, content = '', extra = {}) {
    return (0, builder_1.builder)('h1', id, classes, content, extra, true);
}
exports.h1 = h1;
/**
 * Create a H2 HTML element string.
 *
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 *
 * @returns The H2 HTML element string.
 */
function h2(id, classes, content = '', extra = {}) {
    return (0, builder_1.builder)('h2', id, classes, content, extra, true);
}
exports.h2 = h2;
/**
 * Create a H3 HTML element string.
 *
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 *
 * @returns The H3 HTML element string.
 */
function h3(id, classes, content = '', extra = {}) {
    return (0, builder_1.builder)('h3', id, classes, content, extra, true);
}
exports.h3 = h3;
/**
 * Create a H4 HTML element string.
 *
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 *
 * @returns The H4 HTML element string.
 */
function h4(id, classes, content = '', extra = {}) {
    return (0, builder_1.builder)('h4', id, classes, content, extra, true);
}
exports.h4 = h4;
/**
 * Create a H5 HTML element string.
 *
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 *
 * @returns The H5 HTML element string.
 */
function h5(id, classes, content = '', extra = {}) {
    return (0, builder_1.builder)('h5', id, classes, content, extra, true);
}
exports.h5 = h5;
//# sourceMappingURL=headers.js.map
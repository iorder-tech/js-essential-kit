"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeName = normalizeName;
exports.arrayToStringWithQuotes = arrayToStringWithQuotes;
/**
 * Normalizes a name by capitalizing the first letter of each word.
 *
 * This function converts the input string to lowercase, splits it into words,
 * capitalizes the first letter of each word, and then joins them back together.
 * Extra spaces are removed.
 *
 * @param {string} name - The name string to be normalized.
 * @returns {string} - The normalized name.
 *
 * @example
 * // Normalize a name
 * console.log(normalizeName('john DOE')); // 'John Doe'
 *
 * // Normalize a name with extra spaces
 * console.log(normalizeName('  alice   SMITH  ')); // 'Alice Smith'
 */
function normalizeName(name) {
    return name
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
/**
 * Converts an array of strings into a single string with each item wrapped in quotes.
 *
 * This function takes an array of strings, wraps each string in double quotes,
 * and then joins them with a comma and a space.
 *
 * @param {string[]} items - The array of strings to be converted.
 * @returns {string} - The resulting string with each item wrapped in quotes.
 *
 * @example
 * // Convert an array to a quoted string
 * console.log(arrayToStringWithQuotes(['apple', 'banana', 'cherry']));
 * // Output: '"apple", "banana", "cherry"'
 */
function arrayToStringWithQuotes(items) {
    return items.map((item) => `"${item}"`).join(', ');
}

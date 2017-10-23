/**
 * Checks if `value` is defined and has a value other than null.
 *
 * @export
 * @param {*} value
 * @returns {boolean} `true` if value is neither undefined or null; `false` otherwise
 */
export function isPresent(value: any): boolean {
  return value !== undefined && value !== null;
}

/**
 * Checks if `value` is undefined, null or an empty string
 * @export
 * @param {*} value
 * @returns {boolean} `true` if `value` is undefined, null or empty
 */
export function isBlank(value: any): boolean {
  return isEmpty(value);
}

/**
 * Checks if `value` is undefined, null or an empty string
 * @export
 * @param {*} value
 * @returns {boolean} `true` if `value` is undefined, null or empty
 */
export function isEmpty(value: any): boolean {
  return value === undefined || value === null || value === '';
}

/**
 * Checks if `value` is of type boolean
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 *
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

/**
 *
 *
 * @export
 * @param {*} value
 * @returns {value is String}
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 *
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 *
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}

/**
 *
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
// tslint:disable-next-line:array-type prefer-array-literal
export function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}

/**
 * Returns true if `value` is a Date
 *
 * @export
 * @param {*} value
 * @returns {value is Date}
 */
export function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Returns true if val is either a function or an object
 *
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isJsobject(val: any): boolean {
  return val !== null && (typeof val === 'function' || typeof val === 'object');
}

/**
 * Returns true if val is not a function nor an object
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isPrimitive(value: any): boolean {
  return !isJsobject(value);
}

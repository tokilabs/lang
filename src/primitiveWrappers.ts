import * as util from 'util';

import { FQN } from './fqn';

/**
 * ## NumberWrapper
 *
 * Wraps the number primitive type making it easier to extend
 *
 * @abstract
 * @extends {Number}
 */
@FQN('@cashfarm/lang:NumberWrapper')
export abstract class NumberWrapper extends Number {

  get [Symbol.toStringTag]() {
    console.log('toStringTag', this.constructor.name);

    return this.constructor.name;
  }

  abstract get primitiveValue(): number;

  /**
   * Used to customize stringification by `JSON.stringify()`
   *
   * toJSON() behavior
   *
   * If an object being stringified has a property named toJSON whose value is a function,
   * then the toJSON() method customizes JSON stringification behavior: instead of the object being serialized,
   * the value returned by the toJSON() method when called will be serialized. JSON.stringify calls toJSON with one parameter:
   *
   * - if this object is a property value, the property name
   * - if it is in an array, the index in the array, as a string
   * - an empty string if JSON.stringify was directly called on this object
   *
   * @example
   *
   * ```
   * var obj = {
   *   foo: 'foo',
   *   toJSON: function() {
   *     return 'bar';
   *   }
   * };
   * JSON.stringify(obj);        // '"bar"'
   * JSON.stringify({ x: obj }); // '{"x":"bar"}'
   *
   * var obj2 = {
   *   foo: 'foo',
   *   toJSON: function(key) {
   *     if (key === '') {
   *       return 'bar only';
   *     } else {
   *       return 'bar in ' + key;
   *     }
   *   }
   * };
   *
   * JSON.stringify(obj2);         // '"bar only"'
   * JSON.stringify({ x: obj2 });  // '{ "x":"bar in x"}'
   * JSON.stringify([obj2, obj2]); // '["bar in 0", "bar in 1"]'
   * ```
   *
   * @returns {number}
   * @memberof NumberWrapper
   */
  public toJSON(): number {
    return this.primitiveValue;
  }

  /**
   * Returns the value of this instance as a number
   *
   * @returns {number}
   *
   * @memberOf Decimal
   */
  public valueOf(): number {
    return this.primitiveValue;
  }

  /**
   * Returns the string representation for this instance.
   *
   * @returns {string}
   *
   * @memberOf Decimal
   */
  public toString(): string {
    return String(this.primitiveValue);
  }

  /**
   * Specifies a function valued property that is called to convert an object to a corresponding primitive value
   *
   * With the help of the Symbol.toPrimitive property (used as a function value), an object can be converted to
   * a primitive value. The function is called with a string argument hint, which specifies the preferred type
   * of the result primitive value. The hint argument can be one of "number", "string", and "default".
   *
   * @example Following example describes how Symbol.toPrimitive property can modify the primitive value converted from an object.
   *
   * ```
   * // An object without Symbol.toPrimitive property.
   * var obj1 = {};
   * console.log(+obj1);     // NaN
   * console.log(`${obj1}`); // "[object Object]"
   * console.log(obj1 + ''); // "[object Object]"
   *
   * // An object with Symbol.toPrimitive property.
   * var obj2 = {
   *   [Symbol.toPrimitive](hint) {
   *     if (hint == 'number') {
   *       return 10;
   *     }
   *     if (hint == 'string') {
   *       return 'hello';
   *     }
   *     return true;
   *   }
   * };
   * console.log(+obj2);     // 10        -- hint is "number"
   * console.log(`${obj2}`); // "hello"   -- hint is "string"
   * console.log(obj2 + ''); // "true"    -- hint is "default"
   * ```
   * @param {('number' | 'string' | 'default')} hint
   * @returns
   * @memberof NumberWrapper
   */
  public [Symbol.toPrimitive](hint: 'number' | 'string' | 'default'): number | string {
    if ('string' === hint)
      return this.toString();

    return this.primitiveValue;
  }

  public [util.inspect.custom](depth: number, options: any) {
    return `${this.primitiveValue}`;
  }
}

/**
 * ## StringWrapper
 *
 * Wraps the string primitive type making it easier to extend
 *
 * @abstract
 * @extends String
 */
@FQN('@cashfarm/lang:StringWrapper')
export abstract class StringWrapper extends String {

  get [Symbol.toStringTag]() {
    console.log('toStringTag', this.constructor.name);

    return this.constructor.name;
  }

  protected abstract get primitiveValue(): string;

  constructor(value: string) {
    super(value);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }

  /**
   * Used to customize stringification by `JSON.stringify()`
   *
   * toJSON() behavior
   *
   * If an object being stringified has a property named toJSON whose value is a function,
   * then the toJSON() method customizes JSON stringification behavior: instead of the object being serialized,
   * the value returned by the toJSON() method when called will be serialized. JSON.stringify calls toJSON with one parameter:
   *
   * - if this object is a property value, the property name
   * - if it is in an array, the index in the array, as a string
   * - an empty string if JSON.stringify was directly called on this object
   *
   * @example
   *
   * ```
   * var obj = {
   *   foo: 'foo',
   *   toJSON: function() {
   *     return 'bar';
   *   }
   * };
   * JSON.stringify(obj);        // '"bar"'
   * JSON.stringify({ x: obj }); // '{"x":"bar"}'
   *
   * var obj2 = {
   *   foo: 'foo',
   *   toJSON: function(key) {
   *     if (key === '') {
   *       return 'bar only';
   *     } else {
   *       return 'bar in ' + key;
   *     }
   *   }
   * };
   *
   * JSON.stringify(obj2);         // '"bar only"'
   * JSON.stringify({ x: obj2 });  // '{ "x":"bar in x"}'
   * JSON.stringify([obj2, obj2]); // '["bar in 0", "bar in 1"]'
   * ```
   *
   * @returns {number}
   * @memberof NumberWrapper
   */
  public toJSON(): string {
    return this.primitiveValue;
  }

  /**
   * Returns the value of this instance as a number
   *
   * @returns {number}
   *
   * @memberOf Decimal
   */
  public valueOf(): string {
    return this.primitiveValue;
  }

  /**
   * Returns the string representation for this instance.
   *
   * @returns {string}
   *
   * @memberOf Decimal
   */
  public toString(): string {
    return this.primitiveValue;
  }

  /**
   * Specifies a function valued property that is called to convert an object to a corresponding primitive value
   *
   * With the help of the Symbol.toPrimitive property (used as a function value), an object can be converted to
   * a primitive value. The function is called with a string argument hint, which specifies the preferred type
   * of the result primitive value. The hint argument can be one of "number", "string", and "default".
   *
   * @example Following example describes how Symbol.toPrimitive property can modify the primitive value converted from an object.
   *
   * ```
   * // An object without Symbol.toPrimitive property.
   * var obj1 = {};
   * console.log(+obj1);     // NaN
   * console.log(`${obj1}`); // "[object Object]"
   * console.log(obj1 + ''); // "[object Object]"
   *
   * // An object with Symbol.toPrimitive property.
   * var obj2 = {
   *   [Symbol.toPrimitive](hint) {
   *     if (hint == 'number') {
   *       return 10;
   *     }
   *     if (hint == 'string') {
   *       return 'hello';
   *     }
   *     return true;
   *   }
   * };
   * console.log(+obj2);     // 10        -- hint is "number"
   * console.log(`${obj2}`); // "hello"   -- hint is "string"
   * console.log(obj2 + ''); // "true"    -- hint is "default"
   * ```
   * @param {('number' | 'string' | 'default')} hint
   * @returns
   * @memberof NumberWrapper
   */
  public [Symbol.toPrimitive](hint: 'number' | 'string' | 'default'): number | string {
    if ('number' === hint)
      throw new Error(`A ${this[Symbol.toStringTag]} cannot be converted to a number`);

    return this.primitiveValue;
  }

  public [util.inspect.custom](depth: number, options: any) {
    return `'${this.primitiveValue}'`;
  }
}

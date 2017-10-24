/**
 * A function which receives an object and returns one of it's properties
 */
export type Expression<TObj, TKey> = (value: TObj) => TKey;

/**
 * Represents a type that an object can be instance of.
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @stable
 */
// tslint:disable-next-line:interface-name no-empty-interface
export interface Type extends Function {}

/**
 * Represents a type that is constructable (non-abstract).
 */

// tslint:disable-next-line:interface-name
export interface ConcreteType<T = {}> extends Type {
  new (...args: any[]): T;
}

/**
 * Represents a serialized version of another type
 */
export type Serialized<T> = {
  [P in keyof T]: T[P];
};

/**
 * Represents a constructor for objects of type T
 */
export type Constructor<T = {}> = new(...args: any[]) => T;

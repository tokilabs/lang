/**
 * A function which receives an object and returns one of it's properties
 */
export type Expression<TObj, TKey> = (value: TObj) => TKey;

/**
 * Runtime representation a type that a Component or other object is instances of.
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @stable
 */
export var Type = Function;


export interface Type extends Function {};

/**
 * Runtime representation of a type that is constructable (non-abstract).
 */
export interface ConcreteType<T> extends Type {
  new (...args: any[]): T;
}

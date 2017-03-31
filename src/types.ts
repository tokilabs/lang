/**
 * A function which receives an object and returns one of it's properties
 */
export type Expression<TObj, TKey> = (value: TObj) => TKey;

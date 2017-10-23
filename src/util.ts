import { OrderDirection } from './enums';
import { Expression } from './types';

/**
 * Creates a compare function based on an Expresion and an OrderDirection
 *
 * @template T The type of the objects being compared
 * @param {(Expression<T, string | number>)} expr Expression for the property to be compared
 * @param {OrderDirection} order The order direction
 * @returns {(a: T, b: T) => number} A function that compares two objects of type T
 */
export function makeCompareFn<T>(expr: Expression<T, string | number>, order: OrderDirection = OrderDirection.Asc): (a: T, b: T) => number {
  return (aT: T, bT: T): number => {
    const a: string | number = expr(aT);
    const b: string | number = expr(bT);

    return (a === b ? 0 : (a < b ? -1 : 1)) * (order === OrderDirection.Asc ? 1 : -1);
  };
}

/**
 * A function which does nothing
 */
// tslint:disable-next-line:no-empty
export function noop(): void {}

/**
 * Escapes a regular expression
 *
 * @param regex
 */
export function escapeRegExp(regex: string): string {
  return regex.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}

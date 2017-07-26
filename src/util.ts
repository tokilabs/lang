/**
 * Utility functions
 */
// tslint:disable:no-relative-imports
import { OrderDirection } from './enums';
import { Expression } from './types';

export function makeCompareFn<T>(expr: Expression<T, string | number>, order: OrderDirection): (a: {}, b: {}) => number {
  return (aT: T, bT: T): number => {
    const a: string | number = expr(aT);
    const b: string | number = expr(bT);

    return (a === b ? 0 : (a < b ? -1 : 1)) * order;
  };
}

/**
 * Returns the name of a Type
 *
 * @export
 * @param {Function} aType
 * @returns {string}
 */
export function getTypeNameForDebugging(aType: Function): string {
  if (aType.name) {
    return aType.name;
  }
  return typeof aType;
}

// tslint:disable-next-line:no-empty
export function noop(): void {}

export function escapeRegExp(s: string): string {
  return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}

export function stringify(token: any): string {
  if (typeof token === 'string') {
    return token;
  }

  if (token == null) {
    return '' + token;
  }

  if (token.overriddenName) {
    return `${token.overriddenName}`;
  }

  if (token.name) {
    return `${token.name}`;
  }

  const res = token.toString();
  const newLineIndex = res.indexOf('\n');
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}

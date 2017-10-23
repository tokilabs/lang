import { FQN } from './symbols';
import { NumberWrapper } from './primitiveWrappers';

/**
 * ## Decimal
 *
 * Represents a decimal number with a fixed precision which can be defined in the constructor.
 */
export class Decimal extends NumberWrapper {

  public precision: number;

  get primitiveValue(): number {
    return parseFloat(this.toFixed(this.precision));
  }

  /**
   * Creates an instance of Decimal.
   *
   * @param {(number | string)} value
   *
   * @memberOf Decimal
   */
  constructor(value: number | string, precision: number = 2) {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Decimal constructor requires a number or the string representation of a number.');
    }

    super(parseFloat((value ? value : 0).toFixed(precision)));
    this.precision = precision;
  }

  public toString() {
    return this.toFixed(this.precision);
  }
}

Decimal[FQN] = '@cashfarm/lang:Decimal';

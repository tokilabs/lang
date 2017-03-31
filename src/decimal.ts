/**
 * Decimal class
 *
 * Represents a decimal number with a fixed precision which can be defined in the constructor.
 *
 * @export
 * @class Decimal
 * @extends {Number}
 * @implements {Number}
 */
export class Decimal extends Number implements Number {
  public precision: number;

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

    super(parseFloat((value ? value : 0).toFixed(2)));
    this.precision = precision;
  }

  /**
   * Returns the value of this instance as a number
   *
   * @returns {number}
   *
   * @memberOf Decimal
   */
  public valueOf(): number {
    return parseFloat(this.toFixed(2));
  }

  /**
   * Returns the string representation for this instance.
   *
   * @returns {string}
   *
   * @memberOf Decimal
   */
  public toString(): string {
    return this.toFixed(2);
  }
}

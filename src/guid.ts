import { v4 } from 'uuid';

/**
 * Guid class
 *
 * Represents a guid. based on node-uuid package.
 *
 * @export
 * @class Guid
 */
export class Guid {

  private value: string;

  constructor(guid?: string) {
    if (guid) {
      if (!Guid.isValidGuid(guid))
        throw new Error('Invalid guid value supplied');

      this.value = guid;
    }
    else {
      this.value = v4();
    }
  }

  public static isValidGuid(guid: string): boolean {
    return /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i.test(guid);
  }

  public toJSON(): string {
    return this.value;
  }

  public toString(): string {
    return this.value;
  }
}

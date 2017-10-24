import { FQN } from './fqn';
import { Symbols } from './symbols';

/**
 * ## ExtendedObject
 *
 * Adds useful methods on top of the Object class
 * @deprecated Main reason for this class was to allow controlled serialization. Use class-transformer package instead
 */
@FQN('@cashfarm/lang.ExtendedObject')
export class ExtendedObject extends Object {

  constructor() {
    super();
  }

  public toJSON(): object {
    const props: object = this.constructor[Symbols.SERIALIZE_MAP] || {};

    if (typeof props !== 'object' || Object.keys(props).length === 0) {
      return this;
    }

    const jo: object = {};

    Object.keys(this).forEach( (p: string) => {
      if (props[p] !== false) {
        if (props[p] !== undefined) {
          jo[props[p]] = this[p];
        }
        else {
          jo[p] = this[p];
        }
      }
    });

    Object.keys(props).forEach( (p: string) => {
      if (props[p] === false) return;
      jo[props[p]] = this[p];
    });

    return jo;
  }
}

// Decorators

/**
 * serialize property decorator
 *
 * Marks a property for serialization.
 * Note: To use this decorator the class must extend `ExtendedObject`.
 *
 * @deprecated Use class-transformer package instead
 * @returns {(target: any, propertyKey: string, descriptor: PropertyDescriptor) => void}
 */
export function serialize(): (target: ExtendedObject, propertyKey: string, descriptor: PropertyDescriptor) => void {
  return (target: ExtendedObject, propertyKey: string, descriptor: PropertyDescriptor): void => {
    target[Symbols.SERIALIZE_MAP] = target[Symbols.SERIALIZE_MAP] || {};
    target[Symbols.SERIALIZE_MAP][propertyKey] = propertyKey;
  };
}

/**
 * serializeAs property decorator
 *
 * Ovewrites the name of the serialized property.
 * Note: To use this decorator the class must extend `ExtendedObject`.
 *
 * @deprecated Use class-transformer package instead
 * @param {string} name
 * @returns {(target: any, propertyKey: string) => void}
 */
export function serializeAs(name: string): (target: ExtendedObject, propertyKey: string) => void {
  return (target: ExtendedObject, propertyKey: string): void => {
    target[Symbols.SERIALIZE_MAP] = target[Symbols.SERIALIZE_MAP] || {};
    target[Symbols.SERIALIZE_MAP][propertyKey] = name;
  };
}

/**
 * hide property decorator
 *
 * Hides a property from serialization.
 * Note: To use this decorator the class must extend `ExtendedObject`.
 *
 * @deprecated Use class-transformer package instead
 * @returns {(target: any, propertyKey: string) => void}
 */
export function hide(): (target: ExtendedObject, propertyKey: string) => void {
  return (target: ExtendedObject, propertyKey: string): void => {
    target[Symbols.SERIALIZE_MAP] = target[Symbols.SERIALIZE_MAP] || {};
    target[Symbols.SERIALIZE_MAP][propertyKey] = false;
  };
}

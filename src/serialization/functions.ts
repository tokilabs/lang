import * as CT from 'class-transformer';
import { Constructor } from '../types';
import {
  IExcludeOptions,
  IExposeOptions,
  ITypeOptions,
  ITransformationOptions,
  ITransformOptions } from './interfaces';

/**
 * Enum representing the different transformation types.
 */
export declare enum TransformationType {
  plainToClass = 0,
  ClassToPlain = 1
}

/**
 * Serializes given instance to a JSON string.
 *
 * @param instance The instance to be serialized
 * @param options Transformation options
 */
export function serialize<TClass>(instance: TClass, options?: ITransformationOptions): string;

/**
 * Serializes an array of instances to a JSON string.
 *
 * @param instances The instances to be serialized
 * @param options Transformation options
 */
export function serialize<TClass>(instances: TClass[], options?: ITransformationOptions): string;
export function serialize<TClass>(instances: TClass | TClass[], options?: ITransformationOptions): string {
  return CT.serialize(instances, options);
}

/**
 * Deserializes given JSON string to an array of objects of the given class.
 */
export function deserializeArray<TClass>(cls: Constructor<TClass>, json: string, options?: ITransformationOptions): TClass[] {
  return CT.deserializeArray(cls, json, options);
}

/**
 * Deserializes given JSON string or primitive object to an object or an array of objects of the given class.
 */
export function deserialize<TClass>(cls: Constructor<TClass>, json: string, options?: ITransformationOptions): TClass;
export function deserialize<TClass>(cls: Constructor<TClass>, json: object[], options?: ITransformationOptions): TClass[];
export function deserialize<TClass>(cls: Constructor<TClass>, json: object, options?: ITransformationOptions): TClass;
export function deserialize<TClass>(cls: Constructor<TClass>, json: string | object | object[], options?: ITransformationOptions) {
  if (typeof json === 'string') {
    if (json.trim().startsWith('[')) {
      return CT.deserializeArray(cls, json, options);
    }

    return CT.deserialize(cls, json, options);
  }

  return CT.plainToClass(cls, json, options);
}

/**
 * Converts a class instance to a plain javascript object
 *
 * @param instance An instance of T
 * @param options Transformation options
 */
export function primitify<TClass>(instance: TClass, options?: ITransformationOptions): Object {
  return CT.classToPlain(instance, options);
}

/**
 * Converts an ordinary object and it's properties to instances of their respective classes
 *
 * @param instance An instance of T
 * @param options Transformation options
 */
export function classify<TClass>(cls: Constructor<TClass>, plain: Object, options?: ITransformationOptions): TClass;
export function classify<TClass>(cls: Constructor<TClass>, plain: Object[], options?: ITransformationOptions): TClass[];
export function classify<TClass>(cls: Constructor<TClass>, plain: Object|Object[], options?: ITransformationOptions): TClass | TClass[] {
  return CT.plainToClass(cls, plain, options);
}

/**
 * Hydrates an existing class instance with data from a plain object
 *
 * @param instance An instance to fill
 * @param objects An object to get the data from
 * @param options Transformation options
 */
export function hydrate<TClass>(instance: TClass, objects: Object, options?: ITransformationOptions): TClass;

/**
 * Hydrates many existing instances with data from plain objects
 *
 * @param instances An array of instances to fill
 * @param objects An array of plain objects to get the data from
 * @param options Transformation options
 */
export function hydrate<TClass>(instances: TClass[], objects: Object[], options?: ITransformationOptions): TClass[];
export function hydrate<TClass>(instance: TClass|TClass[], plain: Object|Object[], options?: ITransformationOptions): TClass | TClass[] {
  return CT.plainToClassFromExist(instance, plain, options);
}

/**
 * Hydrates an existing plain object with data from a class instance
 *
 * @param instance An instance to get the data from
 * @param object An object to fill
 * @param options Transformation options
 */
export function hydratePrimitive<TClass>(instance: TClass, object: Object, options?: ITransformationOptions): Object;

/**
 * Hydrates an existing plain object with data from a class instance
 *
 * @param instances An array of instances to get the data from
 * @param objects An array of objects to fill
 * @param options Transformation options
 */
export function hydratePrimitive<TClass>(instances: TClass[], objects: Object[], options?: ITransformationOptions): Object[];
export function hydratePrimitive<TClass>(ins: TClass|TClass[], objs: Object|Object[], options?: ITransformationOptions): Object | Object[] {
  return CT.classToPlainFromExist(ins, objs, options);
}

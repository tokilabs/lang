import * as CT from "class-transformer";
import * as IF from "./interfaces";

/**
 * Transform the object from class to plain object and return only with the exposed properties.
 */
// export function SerializeOptions(
// 	options?: IF.ITransformationOptions
// ): Function {
// 	return TransformClassToPlain(options);
// }

/**
 * ### Class Decorator
 *
 * Specifies the class of a property.
 *
 * @decorator
 */
export function Class(
	typeFunction?: (type?: CT.TypeHelpOptions) => Function
): (target: any, key: string | symbol, parameterIndex?: number) => void {
	return CT.Type(typeFunction);
}

export type TransformFn = (
	value: any,
	obj: any,
	transformationType: CT.TransformationType
) => any;

/**
 * Defines custom transformation logic when converting from a primitive to a class
 *
 * @param transformFn The function used to perform the transformation
 * @param options Transformation options
 */
export function Classify(
	transformFn: (params: CT.TransformFnParams) => any,
	options?: IF.ITransformOptions
): (target: any, key: string) => void {
	options = Object.assign(options || {}, { toClassOnly: true });

	return CT.Transform(transformFn, options);
}

/**
 * Defines custom transformation logic when converting from a primitive to a class
 *
 * @param transformFn The function used to perform the transformation
 * @param options Transformation options
 */
export function Primitify(
	transformFn: (params: CT.TransformFnParams) => {},
	options?: IF.ITransformOptions
): (target: any, key: string) => void {
	options = Object.assign(options || {}, { toPlainOnly: true });

	return CT.Transform(transformFn, options);
}

/**
 * Marks the property as included in the transformation process.
 * If using a string your option will be "name", for more options use "IExposeOptions".
 * By default it includes the property for both
 * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
 * you want to skip this property.
 */
export function Expose(
	options?: IF.IExposeOptions | string
): (object: Object | Function, propertyName?: string) => void {
	if (typeof options === "string") {
		return CT.Expose({ name: options });
	}
	return CT.Expose(options);
}

/**
 * Marks property as excluded from the process of transformation. By default it excludes the property for both
 * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
 * you want to skip this property.
 */
export function Exclude(
	options?: IF.IExcludeOptions
): (object: Object | Function, propertyName?: string) => void {
	return CT.Exclude(options);
}

/**
 * Transform the object from class to plain object and return only with the exposed properties.
 */
// export function TransformClassToPlain(
// 	params?: IF.ITransformationOptions
// ): Function {
// 	return CT.TransformClassToPlain(params);
// }

import { isEmpty } from "./is.js";
import { Type } from "./types.js";
import { Symbols } from "./symbols.js";
import * as path from "path";
import { createRequire } from "module";

const packagePaths = new Map<string, string>();

/**
 * Decorates a class or function with a Fully Qualified Name
 *
 * An FQN string has the following format: `{package}:{namespace}.{class}`
 *
 * Examples:
 *   - @tokilabs/lang:Decimal
 *   - @tokilabs/lang:serialization.Expose
 *
 * @param fqn The Fully Qualified Name of the class
 */
export function FQN(fqn: string): ClassDecorator {
	return (target: Type) => {
		(target as any)[Symbols.FQN] = fqn;
	};
}

/**
 * Defines a path to be used to import the package
 * instead of the requiring the package by name
 *
 * @param packageName The package name
 * @param packageRoot MUST be an absolute path
 */
FQN.registerPackagePath = function registerPackagePath(
	packageName: string,
	packageRoot: string
) {
	if (!path.isAbsolute(packageRoot)) {
		new Error("packageRoot MUST be absolute");
	}
	packagePaths.set(packageName, packageRoot);
};

/**
 * An object that holds the parts that make up a FQN
 */
export type FqnDetails = {
	package: string;
	namespace: string;
	propertyPath?: string;
	className: string;
};

/**
 * Parses an FQN string returning {@link FqnDetails}
 *
 * @param {string} fqn
 * @returns {FqnDetails}
 */
export function parseFQN(fqn: string): FqnDetails {
	const [pkg, property, ...rest] = fqn.split(":");

	if (isEmpty(pkg) || isEmpty(property) || rest.length) {
		throw new Error(
			`Invalid FQN "${fqn}". FQN format should be "{PACKAGE}:[NS.]?{CLASS}"`
		);
	}

	const parts = property.split(".");

	return {
		package: pkg,
		namespace: parts[0],
		propertyPath: parts.join("."),
		className: parts.pop(),
	};
}

/**
 * Requires a class by it's FQN
 *
 * @param {string} fqn
 * @returns
 */
export function requireByFQN(fqn: string) {
	const info = parseFQN(fqn);
	const pkgPath = packagePaths.get(info.package) || info.package;
	const props = info.propertyPath.split(".");
	require = createRequire(path.resolve(pkgPath));
	const pkg = require(pkgPath);
	let currLocation = `package ${pkg}`;

	return props.reduce((currNS, currProp, index) => {
		if (typeof currNS[currProp] == null) {
			throw new Error(
				`Requiring from FQN ${fqn} failed.` +
					`Property ${currProp} does not exist in ${currLocation}`
			);
		}

		currLocation = props.slice(0, index).join(".");

		return currNS[currProp];
	}, pkg);
}

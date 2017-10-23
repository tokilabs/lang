import { isEmpty } from './is';

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
  const [pkg, property, ...rest] = fqn.split(':');

  if (isEmpty(pkg) || isEmpty(property) || rest.length)
    throw new Error(`Invalid FQN "${fqn}". FQN format should be "{PACKAGE}:[NS.]?{CLASS}"`);

  const parts = property.split('.');

  return {
    package: pkg,
    namespace: parts[0],
    propertyPath: parts.join('.'),
    className: parts.pop()
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

  const pkg = require(info.package);
  const props = info.propertyPath.split('.');
  let currLocation = `package ${pkg}`;

  return props.reduce(
    (currNS, currProp, index) => {
      if (typeof currNS[currProp] === undefined) {
        throw new Error(
          `Requiring from FQN ${fqn} failed.` +
          `Property ${currProp} does not exist in ${currLocation}`);
      }

      currLocation = props.slice(0, index).join('.');

      return currNS[currProp];
    },
    pkg);
}

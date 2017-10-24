import { FQN } from './fqn';

/**
 * ## Exception
 *
 * A base class for exceptions
 *
 * Extending javascript Error class has a quirk, check the constructor
 * of this class to see the workaround. Exception class takes care of that
 * thus making it easier to create custom error classes by just
 * extending the Exception class.
 */
@FQN('@cashfarm/lang.Exception')
export class Exception extends Error {
  constructor(message?: string) {
      super(message); // 'Error' breaks prototype chain here
      Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

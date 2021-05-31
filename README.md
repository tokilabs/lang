# The `lang` package

Languages are awesome! Well... most of them are. And that's the case for TypeScript.

Sometimes there are a couple things we miss though...

And, when that happens, instead of complaining about it, we create a lang package :)

Check the API documentation at http://tokilabs.github.io/lang

## Changelog

### v1.0.2

- Updates Class-transformer version from 0.1.8 to 0.3.1

### v1.0.1

- Removes broken mixin Sortable
- Fixes Guid and NanoGuid exports

### v1.0.0

- Adds NanoGuid class

### v0.8.1

- Add deserializeArray method for use with JSON array strings

### v0.8.0

- [BREAKING CHANGE] Removes the ExtendedObject class
- New (de)serialization methods: serialize, deserialize, primitify and classify
- Decorators for controlling serialization

### v0.7.1

- Add FQN decorator and decorate package's classes
- Move symbols into Symbols object
- Add default value (`{}`) for ConcreteType type parameter

### v0.7

- Add FQN support (parseFQN() and requireByFQN())
- Add StringWrapper and NumberWrapper classes for easy primitive subclassing
- Add Exception class which properly extends native Error
- Add Constructor<T> type
- Add tests for Decimal, FQN and Guid
- Improve code documentation and add API documentation
- Refactor Decimal and Guid classes to extend wrappers
- Deprecated ExtendedObject and serialization decorators

#### Breaking Changes

- OrderDirection enum values are now 'ASC' and 'DESC' (previously 1 and -1 respectivelly)
- Removed IEnumerable and Iterator interfaces
- Sortable class is now a mixin

/**
 * Allows to specify a map of Types in the object without using @Type decorator.
 * This is useful when you have external classes.
 */
export interface ITargetMap {
  /**
   * Target which Types are being specified.
   */
  target: Function;

  /**
   * List of properties and their Types.
   */
  properties: {
      [key: string]: Function;
  };
}

/**
 * Options to be passed during transformation.
 */
export interface ITransformationOptions {
  /**
   * Exclusion strategy. By default exposeAll is used, which means that it will expose all properties are transformed
   * by default.
   */
  strategy?: 'excludeAll' | 'exposeAll';

  /**
   * Only properties with given groups gonna be transformed.
   */
  groups?: string[];

  /**
   * Only properties with "since" > version < "until" gonna be transformed.
   */
  version?: number;

  /**
   * Excludes properties with the given prefixes. For example, if you mark your private properties with "_" and "__"
   * you can set this option's value to ["_", "__"] and all private properties will be skipped.
   * This works only for "exposeAll" strategy.
   */
  excludePrefixes?: string[];

  /**
   * If set to true then class transformer will ignore all @Expose and @Exclude decorators and what inside them.
   * This option is useful if you want to kinda clone your object but do not apply decorators affects.
   */
  ignoreDecorators?: boolean;

  /**
   * Target maps allows to set a Types of the transforming object without using @Type decorator.
   * This is useful when you are transforming external classes, or if you already have type metadata for
   * objects and you don't want to set it up again.
   */
  targetMaps?: ITargetMap[];

  /**
   * If set to true then class transformer will perform a circular check. (circular check is turned off by default)
   * This option is useful when you know for sure that your types might have a circular dependency.
   */
  enableCircularCheck?: boolean;
}

export interface ITransformOptions {
  since?: number;
  until?: number;
  groups?: string[];
}

export interface ITypeOptions {
  newObject: any;
  object: Object;
  property: string;
}

export interface IExposeOptions {
  name?: string;
  since?: number;
  until?: number;
  groups?: string[];
  toClassOnly?: boolean;
  toPlainOnly?: boolean;
}

export interface IExcludeOptions {
  toClassOnly?: boolean;
  toPlainOnly?: boolean;
}

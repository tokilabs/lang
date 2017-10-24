export const Symbols = {
  /**
   * Symbol used to store the FQN of classes
   */
  FQN: Symbol.for('@cashfarm/lang.FQN'),

  /**
   * Used by {@link ExtendedObject} to store the serialization map
   */
  SERIALIZE_MAP: Symbol.for('@cashfarm/lang.SERIALIZE_MAP')
};

export default Symbols;

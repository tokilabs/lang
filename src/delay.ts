/**
 * Creates a promise which always resolves in the specified `milliseconds`
 *
 * @export
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
export function delay(milliseconds: number): Promise<void> {
  return new Promise<void>( (resolve: () => void): void => {
    setTimeout(resolve, milliseconds);
  });
}

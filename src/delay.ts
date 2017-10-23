/**
 * Creates a promise which always resolves in the specified `milliseconds`
 *
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
export async function delay(milliseconds: number): Promise<void> {
  return new Promise<void>( (resolve: () => void): void => {
    setTimeout(resolve, milliseconds);
  });
}

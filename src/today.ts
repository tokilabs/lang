/**
 * Returns a new Date object set to 00:00:00 of today
 *
 * @returns {Date}
 */
export function today(): Date {
  const now = new Date();

  return new Date( now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0 );
}

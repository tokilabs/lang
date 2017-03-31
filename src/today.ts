export const today = function(): Date {
  const now = new Date();
  return new Date( now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0 );
};

export class Sortable<T> {
  constructor(private _array: T[]) {}

  public byProperty(prop: string, desc = false): Sortable<T> {
    this._array.sort( (a, b) => (a[prop] > b[prop] ? -1 : (a[prop] < b[prop] ? 1 : 0)) * (desc ? -1 : 1) );
    return this;
  }

  public mapTo<U>(props: string[]): Sortable<U> {
    return new Sortable<U>(
        this._array.map<U>(item => {
          const u: any = {};
          props.forEach(p => {
            u[p] = item[p];
          });
          return u;
        })
    );
  }

  public toArray(): T[] {
    return this._array;
  }
}

export function sort<T>(arr: T[]): Sortable<T> {
  return new Sortable<T>(arr);
}

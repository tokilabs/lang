import { Constructor } from './types';
import { OrderDirection } from './enums';
import { Expression } from './types';
import { makeCompareFn } from './util';

/**
 * ## Sortable
 *
 * A mixin to make an array sortable using byProperty() method
 *
 * @template TBase The type of class being mixed
 */
export function Sortable<TBase extends Constructor<TItem[]>, TItem>(Base: TBase) {
  return class extends Base {
    public byProperty(prop: string | Expression<TItem, string | number>, order: OrderDirection = OrderDirection.Asc) {
      const expr = typeof prop === 'string' ? () => this[prop] : prop;

      this.sort(makeCompareFn(expr, order));

      return this;
    }
  };
}

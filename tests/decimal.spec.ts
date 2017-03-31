/**
 * Decimal class specs
 */

import { expect } from 'chai';
import { Decimal } from '../src/decimal';

describe('Decimal', () => {
  it('Should always have two decimal places', () => {
    expect(new Decimal(2).toString()).to.be.equal('2.00');
    expect(new Decimal(2.1).toString()).to.be.equal('2.10');
    expect(new Decimal(2.254965).toString()).to.be.equal('2.25');
    expect(new Decimal(2.254).valueOf()).to.equal(2.25);
    expect(new Decimal(2.358).valueOf()).to.equal(2.36);
  });

  // Have to disable no-any here because TS still doesn't support operators between types
  // tslint:disable:no-any
  it('Should support math oprations', () => {
    expect((<any>new Decimal(2)) + 2).to.be.equal(4);
    expect((<any>new Decimal(2)) + (new Decimal(2))).to.be.equal(4);
    expect(new Decimal((<any>new Decimal(2.254)) + (<any>new Decimal(2.358))).valueOf()).to.be.equal(4.61);
  });
});
import { expect } from 'chai';
import { Decimal } from '@cashfarm/lang';
import { inspect } from 'util';

describe('Decimal', () => {
  it('Should be an instance of number', () => {
    const d = new Decimal(2.0);
    // tslint:disable-next-line:chai-vague-errors no-unused-expression
    expect(d instanceof Number, 'Not an instance of Number').to.be.true;
  });

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
    const d: number = <any>new Decimal(2.22);
    expect(d + 2).to.be.equal(2.22 + 2);
    expect(d + d).to.be.equal(4.44);
    expect(new Decimal((<any>new Decimal(2.254)) + (<any>new Decimal(2.358))).valueOf()).to.be.equal(4.61);
  });

  it('Should serialize as a number', () => {
    expect(JSON.stringify(new Decimal(2))).to.be.equal(JSON.stringify(2));
    expect(inspect(new Decimal(2))).to.be.equal(inspect(2));

    expect(JSON.stringify(new Decimal(2))).to.be.equal(JSON.stringify(2));
    expect(inspect(new Decimal(2.22))).to.be.equal(inspect(2.22));
  });
});

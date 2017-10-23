import { expect } from 'chai';
import { Guid } from '@cashfarm/lang';
import { inspect } from 'util';

describe('Guid', () => {
  it('Should be an instance of string', () => {
    const g = new Guid();
    // tslint:disable-next-line:chai-vague-errors no-unused-expression
    expect(g instanceof String, 'Not an instance of String').to.be.true;
  });

  it('Should use the value when passed', () => {
    const guidStr = '1ad03214-05aa-4f25-b233-84e5caa3accb';

    expect(new Guid(guidStr).toString()).to.be.equal(guidStr);
  });

  it('Should throw when a invalid guid is passed', () => {
    expect(() => new Guid('abc')).to.throw();
  });

  it('Should always print lowercase', () => {
    const upperCaseGuid = (new Guid()).toUpperCase();

    expect(new Guid(upperCaseGuid).toString()).to.be.equal(upperCaseGuid.toLowerCase());
  });

  it('Should behave like a string when concatenating and inside templates', () => {
    const g1: string = <any>new Guid();
    const g2: string = <any>new Guid();

    expect(g1 + g2).to.be.equal(g1.toString() + g2.toString());
    expect(`${g1}${g2}`).to.be.equal(g1.toString() + g2.toString());
  });

  it('Should serialize as a string', () => {
    const guidStr = '1ad03214-05aa-4f25-b233-84e5caa3accb';
    const g = new Guid(guidStr);

    expect(JSON.stringify(g)).to.be.equal(JSON.stringify(guidStr));
    expect(inspect(g)).to.be.equal(inspect(guidStr));
  });
});

import { expect } from 'chai';
import { Decimal, deserialize, deserializeArray } from '@cashfarm/lang';
import { inspect } from 'util';

class SampleObject {
  public name: string;
}

describe('Serialization', () => {
  it('Should deserialize objects', () => {
    const objs = { name: 'Object one' };

    const desObj = deserialize(SampleObject, objs);

    expect(desObj).to.be.an.instanceOf(SampleObject);
    expect(desObj.name).to.be.equal('Object one');
  });

  it('Should deserialize arrays of objects', () => {
    const objs = [
      { name: 'Object one' },
      { name: 'Object two' }
    ];

    const desObj = deserialize(SampleObject, objs);

    expect(desObj).to.be.an.instanceOf(Array).and.have.lengthOf(2);
    expect(desObj[1]).to.be.an.instanceOf(SampleObject);
    expect(desObj[1].name).to.be.equal('Object two');
  });

  it('Should deserialize JSON object strings', () => {
    const objs = '{ "name": "Object one" }';

    const desObj = deserialize(SampleObject, objs);

    expect(desObj).to.be.an.instanceOf(SampleObject);
    expect(desObj.name).to.be.equal('Object one');
  });

  it('Should deserialize JSON array strings', () => {
    const objs = '[{ "name": "Object one" }, { "name": "Object two" }]';

    const desObj = deserializeArray(SampleObject, objs);

    expect(desObj).to.be.an.instanceOf(Array).and.have.lengthOf(2);
    expect(desObj[1]).to.be.an.instanceOf(SampleObject);
    expect(desObj[1].name).to.be.equal('Object two');
  });
});

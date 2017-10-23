import { expect } from 'chai';

import { parseFQN, requireByFQN } from '@cashfarm/lang';

describe('FQN', () => {
  it('Should throw on FQN missing :', () => {
    // without :
    expect(() => parseFQN('@cashfarm/lang')).to.throw();
  });
  it('Should throw on FQN missing package name', () => {
    // without package
    expect(() => parseFQN(':EventEmitter')).to.throw();
  });
  it('Should throw on FQN missing : [2]', () => {
    // just wrong
    expect(() => parseFQN('events.EventEmitter')).to.throw();
  });
  it('Should throw on invalid FQN which has single word', () => {
    // just wrong
    expect(() => parseFQN('whatever')).to.throw();
  });

  it('Should import classes correctly', () => {
    expect(requireByFQN('@cashfarm/lang:Guid')).to.be.equal(require('@cashfarm/lang').Guid);
    expect(requireByFQN('events:EventEmitter')).to.be.equal(require('events').EventEmitter);
  });
});

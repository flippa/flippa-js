import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Intercom from '../../../src/resources/Intercom';

const expect = chai.expect;
chai.use(sinonChai);

describe('Intercom', () => {
  describe('retrieve', () => {
    it('calls GET /intercom', () => {
      const get = sinon.spy();
      const client = { get };
      const intercom = new Intercom(client);

      intercom.retrieve();

      expect(get).to.have.been.calledWith('/intercom');
    });
  });
});

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import DomainTraits from "../../src/DomainTraits";

describe("DomainTraits", () => {
  describe("list", () => {
    it("delegates to the client", () => {
      const get = sinon.spy();
      const client = { get };
      const traits = new DomainTraits(client, 123);

      traits.list();

      expect(get).to.have.been.calledWith("/listings/123/domain-traits");
    });
  });
});

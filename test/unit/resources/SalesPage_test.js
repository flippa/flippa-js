import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import SalesPage from "../../../src/resources/SalesPage";

describe("SalesPage", () => {
  describe("retrieve", () => {
    it("calls GET /sales-pages/:salesPageId", () => {
      const get = sinon.spy();
      const client = { get };
      const listing = new SalesPage(client, 123);

      listing.retrieve();

      expect(get).to.have.been.calledWith("/sales-pages/123");
    });
  });
});

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import PartnerPage from "../../../src/resources/PartnerPage";

describe("PartnerPage", () => {
  describe("retrieve", () => {
    it("calls GET /partner-pages/:partnerName", () => {
      const get = sinon.spy();
      const client = { get };
      const partnerPage = new PartnerPage(client, 'domainHoldings');

      partnerPage.retrieve();

      expect(get).to.have.been.calledWith("/partner-pages/domainHoldings");
    });
  });
});

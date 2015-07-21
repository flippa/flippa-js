import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import Listing from "../../../src/resources/Listing";

describe("Listing", () => {
  describe("retrieve", () => {
    it("calls GET /listings/:listingId", () => {
      const get = sinon.spy();
      const client = { get };
      const listing = new Listing(client, 123);

      listing.retrieve();

      expect(get).to.have.been.calledWith("/listings/123");
    });
  });

  describe("listDomainTraits", () => {
    it("calls GET /listings/:listingId/domain-traits", () => {
      const get = sinon.spy();
      const client = { get };
      const listing = new Listing(client, 123);

      listing.listDomainTraits();

      expect(get).to.have.been.calledWith("/listings/123/domain-traits");
    });
  });
});

import chai from "chai";

const expect = chai.expect;

import Listing from "../../src/Listing";
import DomainTraits from "../../src/DomainTraits";

describe("Listing", () => {
  describe("domain_traits", () => {
    it("returns a new DomainTraits for the client and listing ID", () => {
      const client = {};
      const listing = new Listing(client, 123);

      const traits = listing.domain_traits();
      expect(traits).to.be.an.instanceOf(DomainTraits)
      expect(traits.listing_id).to.equal(123)
    });
  });
});

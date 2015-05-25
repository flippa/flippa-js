var chai = require("chai");
var expect = chai.expect;

var Listing = require("../../src/Listing");
var DomainTraits = require("../../src/DomainTraits");

describe("Listing", function() {
  describe("domain_traits", function() {
    it("returns a new DomainTraits for the client and listing ID", function() {
      var client = {};
      var listing = new Listing(client, 123);

      var traits = listing.domain_traits();
      expect(traits).to.be.an.instanceOf(DomainTraits)
      expect(traits.listing_id).to.equal(123)
    });
  });
});

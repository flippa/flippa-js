var chai = require("chai");
var expect = chai.expect;

var Flippa = require("../../src/Flippa");
var Listing = require("../../src/Listing");
var Listings = require("../../src/Listings");

describe("Flippa", function() {
  describe("base endpoint URL", function() {
    it("defaults to api.flippa.net/v3", function() {
      var flippa = new Flippa();

      expect(flippa.base_endpoint_url).to.equal("https://api.flippa.net/v3");
    });

    it("can be overriden", function() {
      var flippa = new Flippa({base_endpoint_url: "bob"});

      expect(flippa.base_endpoint_url).to.equal("bob");
    });
  });

  describe("access token", function() {
    it("defaults to null", function() {
      var flippa = new Flippa();

      expect(flippa.access_token).to.equal(null);
    });

    it("can be overriden", function() {
      var flippa = new Flippa({access_token: "bob"});

      expect(flippa.access_token).to.equal("bob");
    });
  });

  describe("listings", function() {
    it("returns a new Listings", function() {
      var flippa = new Flippa();

      expect(flippa.listings()).to.be.an.instanceOf(Listings)
    });
  });

  describe("listing", function() {
    it("returns a new Listing with the given ID", function() {
      var flippa = new Flippa();

      var listing = flippa.listing(123)
      expect(listing).to.be.an.instanceOf(Listing)
      expect(listing.listing_id).to.equal(123)
    });
  });
});

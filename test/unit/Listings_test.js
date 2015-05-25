var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var Listings = require("../../src/Listings");

describe("Listings", function() {
  describe("list", function() {
    it("delegates to the client with the given params", function() {
      var get = sinon.spy();
      var client = { get };
      var listings = new Listings(client);

      listings.list({foo: "bar"});

      expect(get).to.have.been.calledWith("/listings", {foo: "bar"});
    });
  });
});

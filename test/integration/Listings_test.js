var chai = require("chai");
var nock = require("nock");

var expect = chai.expect;

var Flippa = require("../../src/Flippa");

describe("Listings", function() {
  describe("list", function() {
    it("returns a promise for listing data with the given params", function() {
      var client = new Flippa({
        base_endpoint_url: "http://localhost",
        access_token: "some_token",
      });

      var server = nock("http://localhost")
        .get("/listings", {filter: {property_name: "bob.com"}})
        .matchHeader("Accept", "application/json")
        .matchHeader("Authorization", "Bearer some_token")
        .reply(200, {data: [{type: "listings", id: "123"}]});

      client
        .listings()
        .list({filter: {property_name: "bob.com"}})
        .then(function(res) {
          expect(res.body.data.length).to.equal(1)
          expect(res.body.data[0].id).to.equal("123")
        });
    });
  });
});

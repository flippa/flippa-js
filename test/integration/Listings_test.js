import chai from "chai";
import nock from "nock";
import Flippa from "../../src/Flippa";

const expect = chai.expect;

describe("Listings", () => {
  describe("list", () => {
    it("returns a promise for listing data with the given params", () => {
      const client = new Flippa({
        base_endpoint_url: "http://localhost",
        access_token: "some_token",
      });

      const server = nock("http://localhost")
        .get("/listings", {filter: {property_name: "bob.com"}})
        .matchHeader("Accept", "application/json")
        .matchHeader("Authorization", "Bearer some_token")
        .reply(200, {data: [{type: "listings", id: "123"}]});

      client
        .listings()
        .list({filter: {property_name: "bob.com"}})
        .then((res) => {
          expect(res.body.data.length).to.equal(1)
          expect(res.body.data[0].id).to.equal("123")
        });
    });
  });
});

import chai from "chai";
import nock from "nock";
import Flippa from "../../src/Flippa";

const expect = chai.expect;

describe("Listings", () => {
  describe("list", () => {
    it("returns a promise for listing data with the given params", () => {
      const client = new Flippa({
        baseEndpointURL: "http://localhost",
        accessToken: "some_token",
      });

      const server = nock("http://localhost")
        .get("/listings?filter%5Bproperty_name%5D=bob.com")
        .matchHeader("Accept", "application/json")
        .matchHeader("Authorization", "Bearer some_token")
        .reply(200, {data: [{type: "listings", id: "123"}]});

        return client
          .listings
          .list({filter: {property_name: "bob.com"}})
          .then((response) =>  {
            expect(response.body.data).to.eql([{type: 'listings', id: '123'}]);
          })
          .catch((err) => {
            throw err;
          });
    });
  });
});

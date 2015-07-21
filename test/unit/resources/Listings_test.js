import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import Listings from "../../../src/resources/Listings";

describe("Listings", () => {
  describe("list", () => {
    it("calls GET /listings", () => {
      const get = sinon.spy();
      const client = { get };
      const listings = new Listings(client);

      listings.list({foo: "bar"});

      expect(get).to.have.been.calledWith("/listings", {foo: "bar"});
    });
  });
});

import chai from "chai"

import Client from "../../src/Client";

const expect = chai.expect;

describe("Client", () => {
  describe("base endpoint URL", () => {
    it("defaults to api.flippa.com/v3", () => {
      const client = new Client();

      expect(client.baseEndpointURL).to.equal("https://api.flippa.com/v3");
    });

    it("can be overriden", () => {
      const client = new Client({baseEndpointURL: "bob"});

      expect(client.baseEndpointURL).to.equal("bob");
    });
  });

  describe("access token", () => {
    it("defaults to null", () => {
      const client = new Client();

      expect(client.accessToken).to.equal(null);
    });

    it("can be overriden at construction time", () => {
      const client = new Client({accessToken: "bob"});

      expect(client.accessToken).to.equal("bob");
    });

    it("can be overriden after construction", () => {
      const client = new Client();

      client.accessToken = "bob";

      expect(client.accessToken).to.equal("bob");
    });
  });
});

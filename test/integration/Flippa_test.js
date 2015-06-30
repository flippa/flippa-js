import chai from "chai";
import nock from "nock";
import chaiAsPromised from "chai-as-promised";
import Flippa from "../../src/Flippa";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Flippa", () => {
  describe("authenticate with a client credentials grant", () => {
    it("sets the client access token on success", (done) => {
      const client = new Flippa({base_endpoint_url: "http://localhost"});

      const auth = {
        grant_type: "client_credentials",
        client_id: "123",
        client_secret: "shh"
      };

      const server = nock("http://localhost")
        .post("/oauth2/token", auth)
        .matchHeader("Accept", "application/json")
        .reply(200, {access_token: "some_token"});

      expect(client.authenticate(auth))
        .to.eventually.have.property("access_token", "some_token")
        .notify(done);
    });
  });

  describe("authenticate with a login cookie grant", () => {
    it("sets the client access token on success", (done) => {
      const client = new Flippa({base_endpoint_url: "http://localhost"});

      const auth = {
        grant_type: "login_cookie",
        client_id: "123",
      };

      const server = nock("http://localhost")
        .post("/oauth2/token", auth)
        .matchHeader("Accept", "application/json")
        .matchHeader("Cookie", "utok=bob;")
        .reply(200, {access_token: "some_token"});

      expect(client.authenticate(auth, { "utok": "bob" }))
        .to.eventually.have.property("access_token", "some_token")
        .notify(done);
    });
  });
});

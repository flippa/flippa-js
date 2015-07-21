import chai from "chai";
import nock from "nock";
import Flippa from "../../src/Flippa";

const expect = chai.expect;

describe("Flippa", () => {
  describe("authenticate with a client credentials grant", () => {
    it("sets the client access token on success", () => {
      const flippa = new Flippa({baseEndpointURL: "http://localhost"});

      const auth = {
        grant_type: "client_credentials",
        client_id: "123",
        client_secret: "shh"
      };

      const server = nock("http://localhost")
        .post("/oauth2/token", auth)
        .matchHeader("Accept", "application/json")
        .reply(200, {access_token: "some_token"});

      return flippa
        .authenticate(auth)
        .then((flippa) => {
          expect(flippa.accessToken).to.equal("some_token");
        })
        .catch((err) => { throw err; });
    });
  });

  describe("authenticate with a login cookie grant", () => {
    it("sets the client access token on success", () => {
      const flippa = new Flippa({baseEndpointURL: "http://localhost"});

      const auth = {
        grant_type: "login_cookie",
        client_id: "123",
      };

      const server = nock("http://localhost")
        .post("/oauth2/token", auth)
        .matchHeader("Accept", "application/json")
        .matchHeader("Cookie", "utok=bob;")
        .reply(200, {access_token: "some_token"});

      return flippa
        .authenticate(auth, { "utok": "bob" })
        .then((flippa) => {
          expect(flippa.accessToken).to.equal("some_token");
        })
        .catch((err) => { throw err; });
    });
  });
});

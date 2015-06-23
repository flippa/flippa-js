var chai = require("chai");
var nock = require("nock");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var Flippa = require("../../src/Flippa");

describe("Flippa", function() {
  describe("authenticate with a client credentials grant", function() {
    it("sets the client access token on success", function(done) {
      var client = new Flippa({base_endpoint_url: "http://localhost"});

      var auth = {
        grant_type: "client_credentials",
        client_id: "123",
        client_secret: "shh"
      };

      var server = nock("http://localhost")
        .post("/oauth2/token", auth)
        .matchHeader("Accept", "application/json")
        .reply(200, {access_token: "some_token"});

      expect(client.authenticate(auth))
        .to.eventually.have.property("access_token", "some_token")
        .notify(done);
    });
  });

  describe("authenticate with a login cookie grant", function() {
    it("sets the client access token on success", function(done) {
      var client = new Flippa({base_endpoint_url: "http://localhost"});

      var auth = {
        grant_type: "login_cookie",
        client_id: "123",
      };

      var server = nock("http://localhost")
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

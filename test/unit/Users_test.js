var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var Users = require("../../src/Users");

describe("Users", function() {
  describe("identify", function() {
    it("delegates to the given client", function() {
      var get = sinon.spy();
      var client = { get };
      var users = new Users(client);

      users.identify();

      expect(get).to.have.been.calledWith("/users/identify");
    });
  });
});

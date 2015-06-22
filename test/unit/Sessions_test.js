var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var Sessions = require("../../src/Sessions");

describe("Sessions", function() {
  describe("create", function() {
    it("delegates to the given client", function() {
      var post = sinon.spy();
      var client = { post };
      var sessions = new Sessions(client);

      sessions.create();

      expect(post).to.have.been.calledWith("/sessions");
    });
  });
});

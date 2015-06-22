var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var SavedSearch = require("../../src/SavedSearch");

describe("SavedSearch", function() {
  describe("delete", function() {
    it("delegates to the client", function() {
      var del = sinon.spy();
      var client = { del };
      var search = new SavedSearch(client, 123);

      search.del();

      expect(del).to.have.been.calledWith("/saved-searches/123");
    });
  });
});

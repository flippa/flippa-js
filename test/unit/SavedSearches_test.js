var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var SavedSearches = require("../../src/SavedSearches");

describe("SavedSearches", function() {
  describe("list", function() {
    it("delegates to the client", function() {
      var get = sinon.spy();
      var client = { get };
      var searches = new SavedSearches(client, 123);

      searches.list();

      expect(get).to.have.been.calledWith("/users/123/saved-searches");
    });
  });
});

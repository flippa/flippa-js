var chai = require("chai");
var expect = chai.expect;

var User = require("../../src/User");
var SavedSearches = require("../../src/SavedSearches");

describe("User", function() {
  describe("saved_searches", function() {
    it("returns a new SavedSearches for the client and user ID", function() {
      var client = {};
      var user = new User(client, 123);

      var searches = user.saved_searches();
      expect(searches).to.be.an.instanceOf(SavedSearches)
      expect(searches.user_id).to.equal(123)
    });
  });
});

import chai from "chai";
const expect = chai.expect;

import User from "../../src/User";
import SavedSearches from "../../src/SavedSearches";

describe("User", () => {
  describe("saved_searches", () => {
    it("returns a new SavedSearches for the client and user ID", () => {
      const client = {};
      const user = new User(client, 123);

      const searches = user.saved_searches();
      expect(searches).to.be.an.instanceOf(SavedSearches)
      expect(searches.user_id).to.equal(123)
    });
  });
});

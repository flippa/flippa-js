import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SavedSearches from "../../src/SavedSearches";

describe("SavedSearches", () => {
  describe("list", () => {
    it("delegates to the client", () => {
      const get = sinon.spy();
      const client = { get };
      const searches = new SavedSearches(client, 123);

      searches.list();

      expect(get).to.have.been.calledWith("/users/123/saved-searches");
    });
  });
});

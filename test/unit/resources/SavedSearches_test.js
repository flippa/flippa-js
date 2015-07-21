import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SavedSearches from "../../../src/resources/SavedSearches";

describe("SavedSearches", () => {
  describe("del", () => {
    it("delegates to the client", () => {
      const del = sinon.spy();
      const client = { del };
      const searches = new SavedSearches(client, 123);

      searches.del(123);

      expect(del).to.have.been.calledWith("/saved-searches/123");
    });
  });
});

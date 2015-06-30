import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import SavedSearch from "../../src/SavedSearch";

describe("SavedSearch", () => {
  describe("delete", () => {
    it("delegates to the client", () => {
      const del = sinon.spy();
      const client = { del };
      const search = new SavedSearch(client, 123);

      search.del();

      expect(del).to.have.been.calledWith("/saved-searches/123");
    });
  });
});

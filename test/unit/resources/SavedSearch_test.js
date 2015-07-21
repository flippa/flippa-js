import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SavedSearch from "../../../src/resources/SavedSearch";

describe("SavedSearch", () => {
  describe("del", () => {
    it("calls DELETE /saved-searches/:savedSearchId", () => {
      const del = sinon.spy();
      const client = { del };
      const search = new SavedSearch(client, 123);

      search.del(123);

      expect(del).to.have.been.calledWith("/saved-searches/123");
    });
  });
});

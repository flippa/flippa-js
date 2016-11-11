import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SavedSearch from "../../../src/resources/SavedSearch";

describe("SavedSearch", () => {
  describe("list", () => {
    it("calls GET /saved-searches", () => {
      const get = sinon.spy();
      const client = { get };
      const search = new SavedSearch(client);

      search.list();

      expect(get).to.have.been.calledWith("/saved-searches");
    });
  });

  describe("create", () => {
    it("calls POST /saved-searches", () => {
      const post = sinon.spy();
      const client = { post };
      const search = new SavedSearch(client);
      const params = {"name": "foo", "search": {"query": "foo"}}

      search.create(params);

      expect(post).to.have.been.calledWith("/saved-searches");
    });
  });

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

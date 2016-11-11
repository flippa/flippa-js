import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SavedSearchSubscription from "../../../src/resources/SavedSearchSubscription";

describe("SavedSearchSubscription", () => {
  describe("create", () => {
    it("calls POST /saved-searches/:savedSearchId/subscription", () => {
      const post = sinon.spy();
      const client = { post };
      const searchId = "1";
      const sub = new SavedSearchSubscription(client, searchId);

      sub.create();

      expect(post).to.have.been.calledWith(`/saved-searches/${searchId}/subscription`);
    });
  });

  describe("del", () => {
    it("calls DELETE /saved-searches/:savedSearchId", () => {
      const del = sinon.spy();
      const client = { del };
      const searchId = "1";
      const sub = new SavedSearchSubscription(client, searchId);

      sub.del();

      expect(del).to.have.been.calledWith(`/saved-searches/${searchId}/subscription`);
    });
  });
});

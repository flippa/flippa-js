import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import User from "../../../src/resources/User";

describe("User", () => {
  describe("retrieve", () => {
    it("calls GET /users/:userId", () => {
      const get = sinon.spy();
      const client = { get };
      const user = new User(client, 123);

      user.retrieve();

      expect(get).to.have.been.calledWith("/users/123");
    });
  });

  describe("listSavedSearches", () => {
    it("calls GET /users/:userId/saved-searches", () => {
      const get = sinon.spy();
      const client = { get };
      const user = new User(client, 123);

      user.listSavedSearches();

      expect(get).to.have.been.calledWith("/users/123/saved-searches");
    });
  });

  describe("listAlerts", () => {
    it("calls GET /users/:userId/alerts", () => {
      const get = sinon.spy();
      const client = { get };
      const user = new User(client, 123);

      user.listAlerts();

      expect(get).to.have.been.calledWith("/users/123/alerts");
    });
  });
});

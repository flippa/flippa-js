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

  describe("createWatchedItem", () => {
    it("calls POST /users/:userId/watched-items the with given parameters", () => {
      const post = sinon.spy();
      const client = { post };
      const user = new User(client, 123);

      user.createWatchedItem({foo: "bar"});

      expect(post).to.have.been.calledWith("/users/123/watched-items", {foo: "bar"});
    });
  });

  describe("delWatchedItem", () => {
    it("calls DELETE /users/:userId/watched-items the with given parameters", () => {
      const del = sinon.spy();
      const client = { del };
      const user = new User(client, 123);

      user.delWatchedItem({foo: "bar"});

      expect(del).to.have.been.calledWith("/users/123/watched-items", {foo: "bar"});
    });
  });
});

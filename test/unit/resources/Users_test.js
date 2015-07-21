import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import Users from "../../../src/resources/Users";

describe("Users", () => {
  describe("identify", () => {
    it("delegates to the given client", () => {
      const get = sinon.spy();
      const client = { get };
      const users = new Users(client);

      users.identify();

      expect(get).to.have.been.calledWith("/users/identify");
    });
  });

  describe("retrieve", () => {
    it("delegates to the given client", () => {
      const get = sinon.spy();
      const client = { get };
      const users = new Users(client);

      users.retrieve(123);

      expect(get).to.have.been.calledWith("/users/123");
    });
  });

  describe("listSavedSearches", () => {
    it("delegates to the given client", () => {
      const get = sinon.spy();
      const client = { get };
      const users = new Users(client);

      users.listSavedSearches(123);

      expect(get).to.have.been.calledWith("/users/123/saved-searches");
    });
  });
});

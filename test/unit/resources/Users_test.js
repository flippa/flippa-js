import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import Users from "../../../src/resources/Users";

describe("Users", () => {
  describe("identify", () => {
    it("calls GET /users/identify", () => {
      const get = sinon.spy();
      const client = { get };
      const users = new Users(client);

      users.identify();

      expect(get).to.have.been.calledWith("/users/identify");
    });
  });

  describe("create", () => {
    it("calls POST /users with the given parameters", () => {
      const post = sinon.spy();
      const client = { post };
      const users = new Users(client);

      users.create({foo: "bar"})

      expect(post).to.have.been.calledWith("/users", {foo: "bar"});
    });
  });
});

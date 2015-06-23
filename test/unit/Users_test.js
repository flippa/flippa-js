import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import Users from "../../src/Users";

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
});

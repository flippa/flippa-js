import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import Sessions from "../../../src/resources/Sessions";

describe("Sessions", () => {
  describe("create", () => {
    it("calls POST /sessions", () => {
      const post = sinon.spy();
      const client = { post };
      const sessions = new Sessions(client);

      sessions.create();

      expect(post).to.have.been.calledWith("/sessions");
    });
  });
});

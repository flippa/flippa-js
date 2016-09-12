import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SessionFlashMessages from "../../../src/resources/SessionFlashMessages";

describe("SessionFlashMessages", () => {
  describe("list", () => {
    it("calls GET /sessions/flash-messages", () => {
      const get = sinon.spy();
      const client = { get };
      const sessionFlashMessages = new SessionFlashMessages(client);

      sessionFlashMessages.list();

      expect(get).to.have.been.calledWith("/sessions/flash-messages");
    });
  });
});

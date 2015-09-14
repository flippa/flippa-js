import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import Career from "../../../src/resources/Career";

describe("Career", () => {
  describe("retrieve", () => {
    it("calls GET /careers/:careerId", () => {
      const get = sinon.spy();
      const client = { get };
      const career = new Career(client, 123);

      career.retrieve();

      expect(get).to.have.been.calledWith("/careers/123");
    });
  });
});

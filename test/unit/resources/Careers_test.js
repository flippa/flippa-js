import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import Careers from "../../../src/resources/Careers";

describe("Careers", () => {
  describe("list", () => {
    it("calls GET /careers", () => {
      const get = sinon.spy();
      const client = { get };
      const careers = new Careers(client);

      careers.list({foo: "bar"});

      expect(get).to.have.been.calledWith("/careers", {foo: "bar"});
    });
  });
});

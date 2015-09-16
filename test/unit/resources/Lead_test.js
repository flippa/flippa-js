import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import Lead from "../../../src/resources/Lead";

describe("Lead", () => {
  describe("create", () => {
    it("calls POST /lead with the given parameters", () => {
      const post = sinon.spy();
      const client = { post };
      const lead = new Lead(client);
      const params = {
        message: "Hello? Yes this is dog."
      };

      lead.create(params);

      expect(post).to.have.been.calledWith("/leads", params);
    });
  });
});

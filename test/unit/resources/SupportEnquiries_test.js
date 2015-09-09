import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
const expect = chai.expect;

import SupportEnquiries from "../../../src/resources/SupportEnquiries";

describe("SupportEnquiries", () => {
  describe("create", () => {
    it("calls POST /support-enquiries with the given parameters", () => {
      const post = sinon.spy();
      const client = { post };
      const supportEnquiries = new SupportEnquiries(client);
      const params = {
        message: "Yes this is Mc Lovin’ speaking."
      };

      supportEnquiries.create(params);

      expect(post).to.have.been.calledWith("/support-enquiries", params);
    });
  });
});

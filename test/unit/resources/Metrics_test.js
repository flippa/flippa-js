import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

const expect = chai.expect;
chai.use(sinonChai);

import Metrics from "../../../src/resources/Metrics";

describe("Metrics", () => {
  describe("list", () => {
    it("calls GET /metrics", () => {
      const get = sinon.spy();
      const client = { get };
      const metrics = new Metrics(client);

      metrics.list();

      expect(get).to.have.been.calledWith("/metrics");
    });
  });
});

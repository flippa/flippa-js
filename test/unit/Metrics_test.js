var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var Metrics = require("../../src/Metrics");

describe("Metrics", function() {
  describe("list", function() {
    it("delegates to the client", function() {
      var get = sinon.spy();
      var client = { get };
      var metrics = new Metrics(client);

      metrics.list();

      expect(get).to.have.been.calledWith("/metrics");
    });
  });
});

var chai = require("chai");
var sinon = require("sinon");

chai.use(require("sinon-chai"));
var expect = chai.expect;

var DomainTraits = require("../../src/DomainTraits");

describe("DomainTraits", function() {
  describe("list", function() {
    it("delegates to the client", function() {
      var get = sinon.spy();
      var client = { get };
      var traits = new DomainTraits(client, 123);

      traits.list();

      expect(get).to.have.been.calledWith("/listings/123/domain-traits");
    });
  });
});

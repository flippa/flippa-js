import chai from "chai"

import Flippa from "../../src/Flippa";

import Listings from "../../src/resources/Listings";
import Metrics from "../../src/resources/Metrics";
import SavedSearches from "../../src/resources/SavedSearches";
import Sessions from "../../src/resources/Sessions";
import Users from "../../src/resources/Users";

const expect = chai.expect;

describe("Flippa", () => {
  describe("listings", () => {
    it("returns a new Listings", () => {
      const flippa = new Flippa();

      expect(flippa.listings).to.be.an.instanceOf(Listings)
    });
  });

  describe("metrics", () => {
    it("returns a new Metrics", () => {
      const flippa = new Flippa();

      expect(flippa.metrics).to.be.an.instanceOf(Metrics)
    });
  });

  describe("sessions", () => {
    it("returns a new Sessions", () => {
      const flippa = new Flippa();

      expect(flippa.sessions).to.be.an.instanceOf(Sessions)
    });
  });

  describe("users", () => {
    it("returns a new Users", () => {
      const flippa = new Flippa();

      expect(flippa.users).to.be.an.instanceOf(Users)
    });
  });

  describe("savedSearches", () => {
    it("returns a new SavedSearches", () => {
      const flippa = new Flippa();

      expect(flippa.savedSearches).to.be.an.instanceOf(SavedSearches)
    });
  });
});

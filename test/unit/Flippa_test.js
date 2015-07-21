import chai from "chai"

import Flippa from "../../src/Flippa";

import Listing from "../../src/resources/Listing";
import Listings from "../../src/resources/Listings";
import Metrics from "../../src/resources/Metrics";
import SavedSearch from "../../src/resources/SavedSearch";
import Sessions from "../../src/resources/Sessions";
import User from "../../src/resources/User";
import Users from "../../src/resources/Users";

const expect = chai.expect;

describe("Flippa", () => {
  describe("listing", () => {
    it("returns a new Listing with the given ID", () => {
      const flippa = new Flippa();

      expect(flippa.listing(123)).to.be.an.instanceOf(Listing);
      expect(flippa.listing(123).listingId).to.eq(123);
    });
  });

  describe("listings", () => {
    it("returns a new Listings", () => {
      const flippa = new Flippa();

      expect(flippa.listings).to.be.an.instanceOf(Listings);
    });
  });

  describe("metrics", () => {
    it("returns a new Metrics", () => {
      const flippa = new Flippa();

      expect(flippa.metrics).to.be.an.instanceOf(Metrics);
    });
  });

  describe("sessions", () => {
    it("returns a new Sessions", () => {
      const flippa = new Flippa();

      expect(flippa.sessions).to.be.an.instanceOf(Sessions);
    });
  });

  describe("user", () => {
    it("returns a new User with the given ID", () => {
      const flippa = new Flippa();

      expect(flippa.user(123)).to.be.an.instanceOf(User);
      expect(flippa.user(123).userId).to.eq(123);
    });
  });

  describe("users", () => {
    it("returns a new Users", () => {
      const flippa = new Flippa();

      expect(flippa.users).to.be.an.instanceOf(Users);
    });
  });

  describe("savedSearch", () => {
    it("returns a new SavedSearch with the given ID", () => {
      const flippa = new Flippa();

      expect(flippa.savedSearch(123)).to.be.an.instanceOf(SavedSearch);
      expect(flippa.savedSearch(123).savedSearchId).to.eq(123);
    });
  });
});

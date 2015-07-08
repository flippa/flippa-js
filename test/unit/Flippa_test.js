import chai from "chai"

import Flippa from "../../src/Flippa";
import Listing from "../../src/Listing";
import Listings from "../../src/Listings";
import Metrics from "../../src/Metrics";
import SavedSearch from "../../src/SavedSearch";
import Sessions from "../../src/Sessions";
import User from "../../src/User";
import Users from "../../src/Users";

const expect = chai.expect;

describe("Flippa", () => {
  describe("base endpoint URL", () => {
    it("defaults to flippa.com/v3", () => {
      const flippa = new Flippa();

      expect(flippa.base_endpoint_url).to.equal("https://flippa.com/v3");
    });

    it("can be overriden", () => {
      const flippa = new Flippa({base_endpoint_url: "bob"});

      expect(flippa.base_endpoint_url).to.equal("bob");
    });
  });

  describe("access token", () => {
    it("defaults to null", () => {
      const flippa = new Flippa();

      expect(flippa.access_token).to.equal(null);
    });

    it("can be overriden", () => {
      const flippa = new Flippa({access_token: "bob"});

      expect(flippa.access_token).to.equal("bob");
    });
  });

  describe("listings", () => {
    it("returns a new Listings", () => {
      const flippa = new Flippa();

      expect(flippa.listings()).to.be.an.instanceOf(Listings)
    });
  });

  describe("listing", () => {
    it("returns a new Listing with the given ID", () => {
      const flippa = new Flippa();

      const listing = flippa.listing(123)
      expect(listing).to.be.an.instanceOf(Listing)
      expect(listing.listing_id).to.equal(123)
    });
  });

  describe("metrics", () => {
    it("returns a new Metrics", () => {
      const flippa = new Flippa();

      expect(flippa.metrics()).to.be.an.instanceOf(Metrics)
    });
  });

  describe("sessions", () => {
    it("returns a new Sessions", () => {
      const flippa = new Flippa();

      const sessions = flippa.sessions()
      expect(sessions).to.be.an.instanceOf(Sessions)
    });
  });

  describe("users", () => {
    it("returns a new Users", () => {
      const flippa = new Flippa();

      expect(flippa.users()).to.be.an.instanceOf(Users)
    });
  });

  describe("user", () => {
    it("returns a new User with the given ID", () => {
      const flippa = new Flippa();

      const user = flippa.user(123)
      expect(user).to.be.an.instanceOf(User)
      expect(user.user_id).to.equal(123)
    });
  });

  describe("saved_search", () => {
    it("returns a new SavedSearch with the given ID", () => {
      const flippa = new Flippa();

      const search = flippa.saved_search(123)
      expect(search).to.be.an.instanceOf(SavedSearch)
      expect(search.saved_search_id).to.equal(123)
    });
  });
});

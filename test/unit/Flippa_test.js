import chai from "chai"

import Flippa from "../../src/Flippa";

import Career from "../../src/resources/Career";
import Careers from "../../src/resources/Careers";
import Lead from "../../src/resources/Lead";
import Listing from "../../src/resources/Listing";
import Listings from "../../src/resources/Listings";
import Metrics from "../../src/resources/Metrics";
import SalesPage from "../../src/resources/SalesPage";
import SavedSearch from "../../src/resources/SavedSearch";
import Sessions from "../../src/resources/Sessions";
import SupportEnquiries from "../../src/resources/SupportEnquiries";
import User from "../../src/resources/User";
import Users from "../../src/resources/Users";
import PartnerPage from "../../src/resources/PartnerPage";
import Intercom from "../../src/resources/Intercom";

const expect = chai.expect;

describe("Flippa", () => {
  describe("access token", () => {
    it("can be accessed and modified", () => {
      const flippa = new Flippa();

      expect(flippa.accessToken).to.eq(null);
      expect(flippa.client.accessToken).to.eq(null);

      flippa.accessToken = "bob";

      expect(flippa.accessToken).to.eq("bob");
      expect(flippa.client.accessToken).to.eq("bob");
    });
  });

  describe("career", () => {
    it("returns a new Career with the given ID", () => {
      const flippa = new Flippa();

      expect(flippa.career(123)).to.be.an.instanceOf(Career);
      expect(flippa.career(123).careerId).to.eq(123);
    });
  });

  describe("careers", () => {
    it("returns a new Careers", () => {
      const flippa = new Flippa();

      expect(flippa.careers).to.be.an.instanceOf(Careers);
    });
  });

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

  describe("salesPage", () => {
    it("returns a new SalesPage with the given ID", () => {
      const flippa = new Flippa();

      expect(flippa.salesPage(123)).to.be.an.instanceOf(SalesPage);
      expect(flippa.salesPage(123).salesPageId).to.eq(123);
    });
  });

  describe("SupportEnquiries", () => {
    it("returns a new SupportEnquiries", () => {
      const flippa = new Flippa();

      expect(flippa.supportEnquiries).to.be.an.instanceOf(SupportEnquiries);
    });
  });

  describe("Lead", () => {
    it("returns a new Lead", () => {
      const flippa = new Flippa();

      expect(flippa.lead).to.be.an.instanceOf(Lead);
    });
  });

  describe("PartnerPage", () => {
    it("returns a new PartnerPage", () => {
      const flippa = new Flippa();

      expect(flippa.partnerPage("domainHoldings")).to.be.an.instanceOf(PartnerPage);
      expect(flippa.partnerPage("domainHoldings").pageName).to.eq("domainHoldings");
    });
  });

  describe("intercom", () => {
    it("returns a new Intercom", () => {
      const flippa = new Flippa();

      expect(flippa.intercom).to.be.an.instanceOf(Intercom);
    });
  })
});

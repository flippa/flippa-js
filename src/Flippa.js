import Client from "./Client";

import Career from "./resources/Career";
import Careers from "./resources/Careers";
import Lead from "./resources/Lead";
import Listing from "./resources/Listing";
import Listings from "./resources/Listings";
import Metrics from "./resources/Metrics";
import SalesPage from "./resources/SalesPage";
import SavedSearch from "./resources/SavedSearch";
import Sessions from "./resources/Sessions";
import SupportEnquiries from "./resources/SupportEnquiries";
import User from "./resources/User";
import Users from "./resources/Users";
import PartnerPage from "./resources/PartnerPage";
import Intercom from "./resources/Intercom";

import Promise from "bluebird";

export default class Flippa {
  constructor(opts={}) {
    this.client = new Client(opts);
  }

  get accessToken() {
    return this.client.accessToken;
  }

  set accessToken(token) {
    this.client.accessToken = token;
  }

  authenticate(params, cookies={}) {
    return new Promise((resolve, reject) => {
      this
        .client
        .post("/oauth2/token", params, cookies)
        .then(res => {
          this.client.accessToken = res.body.access_token;
          resolve(this);
        })
        .catch((err) => {
          reject(err)
        });
    });
  }

  listing(listingId) {
    return new Listing(this.client, listingId);
  }

  get listings() {
    return new Listings(this.client);
  }

  get metrics() {
    return new Metrics(this.client);
  }

  user(userId) {
    return new User(this.client, userId);
  }

  get users() {
    return new Users(this.client);
  }

  get sessions() {
    return new Sessions(this.client);
  }

  salesPage(salesPageId) {
    return new SalesPage(this.client, salesPageId);
  }

  savedSearch(savedSearchId) {
    return new SavedSearch(this.client, savedSearchId);
  }

  get supportEnquiries() {
    return new SupportEnquiries(this.client);
  }

  career(careerId) {
    return new Career(this.client, careerId);
  }

  get careers() {
    return new Careers(this.client);
  }

  get lead() {
    return new Lead(this.client);
  }

  partnerPage(pageName) {
    return new PartnerPage(this.client, pageName);
  }

  get intercom() {
    return new Intercom(this.client);
  }
};

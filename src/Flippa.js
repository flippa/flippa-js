import Client from "./Client";

import Listing from "./resources/Listing";
import Listings from "./resources/Listings";
import Metrics from "./resources/Metrics";
import SavedSearch from "./resources/SavedSearch";
import Sessions from "./resources/Sessions";
import User from "./resources/User";
import Users from "./resources/Users";

import Promise from "bluebird";

export default class Flippa {
  constructor(opts={}) {
    this.client = new Client(opts);
  }

  accessToken() {
    return this.client.accessToken;
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

  savedSearch(savedSearchId) {
    return new SavedSearch(this.client, savedSearchId);
  }
};

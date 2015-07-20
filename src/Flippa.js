import Client from "./Client";

import Listings from "./resources/Listings";
import Metrics from "./resources/Metrics";
import SavedSearches from "./resources/SavedSearches";
import Sessions from "./resources/Sessions";
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

  get listings() {
    return new Listings(this.client);
  }

  get metrics() {
    return new Metrics(this.client);
  }

  get users() {
    return new Users(this.client);
  }

  get sessions() {
    return new Sessions(this.client);
  }

  get savedSearches() {
    return new SavedSearches(this.client);
  }
};

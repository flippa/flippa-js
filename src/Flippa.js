import Request from "superagent-bluebird-promise";
import Promise from "bluebird";

import Listing from "./Listing"
import Listings from "./Listings"
import Metrics from "./Metrics"

export default class Flippa {
  constructor(opts={}) {
    this.base_endpoint_url = opts.base_endpoint_url || "https://api.flippa.net/v3";
    this.access_token = opts.access_token || null;
  }

  get(endpoint, params) {
    var request = Request
      .get(this.base_endpoint_url + endpoint)
      .send(params)
      .set("Accept", "application/json")

    if (this.access_token) {
      request.set("Authorization", `Bearer ${this.access_token}`)
    }

    return request.promise();
  }

  post(endpoint, params, cookies={}) {
    var request = Request
      .post(this.base_endpoint_url + endpoint)
      .set("Accept", "application/json")
      .send(params)

    if (Object.keys(cookies).length !== 0) {
      const cookieString = Object.keys(cookies).reduce((acc, key) => {
        return `${acc}${key}=${cookies[key]};`;
      }, "");

      request.set("Cookie", cookieString);
    }

    if (this.access_token) {
      request.set("Authorization", `Bearer ${this.access_token}`)
    }

    return request.promise();
  }

  authenticate(params, cookies={}) {
    return new Promise((resolve, reject) => {
      this
        .post("/oauth2/token", params, cookies)
        .then(res => {
          this.access_token = res.body.access_token;
          resolve();
        })
        .catch(err => reject(err))
    });
  }

  listings() {
    return new Listings(this);
  }

  listing(listing_id) {
    return new Listing(this, listing_id);
  }

  metrics() {
    return new Metrics(this);
  }
};

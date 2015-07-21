import Request from "superagent-bluebird-promise";
import qs from "qs";

export default class Client {
  constructor(opts={}) {
    this.baseEndpointURL = opts.baseEndpointURL || "https://flippa.com/v3";
    this.accessToken = opts.accessToken || null;
  }

  get(endpoint, params={}) {
    var request = Request
      .get(this.baseEndpointURL + endpoint)
      .query(qs.stringify(params))
      .set("Accept", "application/json")

    this._setAuthorizationHeader(request);

    return request.promise();
  }

  post(endpoint, params={}, cookies={}) {
    var request = Request
      .post(this.baseEndpointURL + endpoint)
      .set("Accept", "application/json")
      .send(params)

    this._setCookieHeader(request, cookies)

    this._setAuthorizationHeader(request);

    return request.promise();
  }

  del(endpoint, params={}) {
    var request = Request
      .del(this.baseEndpointURL + endpoint)
      .set("Accept", "application/json")
      .send(params);

    this._setAuthorizationHeader(request);

    return request.promise();
  }

  _setAuthorizationHeader(request) {
    if (this.accessToken) {
      request.set("Authorization", `Bearer ${this.accessToken}`);
    }
  }

  _setCookieHeader(request, cookies) {
    if (Object.keys(cookies).length !== 0) {
      request.set("Cookie", this._cookieString(cookies));
    }
  }

  _cookieString(cookies) {
    return Object.keys(cookies).reduce((acc, key) => {
      return `${acc}${key}=${cookies[key]};`;
    }, "");
  }
}

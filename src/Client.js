import Request from "superagent";
import qs from "qs";

export default class Client {
  constructor(opts={}) {
    this.baseEndpointURL = opts.baseEndpointURL || "https://api.flippa.com/v3";
    this.accessToken = opts.accessToken || null;
    this.timeout = opts.timeout || 15000;
  }

  get(endpoint, params={}) {
    var request = Request
      .get(this.baseEndpointURL + endpoint)
      .withCredentials()
      .query(qs.stringify(params))
      .set("Accept", "application/json")
      .timeout(this.timeout);

    this._setAuthorizationHeader(request);

    return request;
  }

  post(endpoint, params={}, cookies={}) {
    var request = Request
      .post(this.baseEndpointURL + endpoint)
      .withCredentials()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(params)
      .timeout(this.timeout);

    this._setCookieHeader(request, cookies)

    this._setAuthorizationHeader(request);

    return request;
  }

  del(endpoint, params={}) {
    var request = Request
      .del(this.baseEndpointURL + endpoint)
      .withCredentials()
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(params)
      .timeout(this.timeout);

    this._setAuthorizationHeader(request);

    return request;
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

### head

### 3.0.0

* Preferred native promises over bluebird
* Removed `bluebird`, `superagent-bluebird-promise`
* Promises now require a polyfill

### 2.11.4

* Set `withCredentials` on request to support CORS cookie sessions

### 2.11.2

* Set `Content-Type` header to `application/json` for post and delete requests.

### 2.11.1

* Allow usage of pluralized resource name for saved search and saved search
  subscription

### 2.11.0

* Support for updated Saved Searches endpoint

### 2.10.0

* Support for Session Flash Messages endpoint

### 2.9.0

* Support for Intercom endpoint

### 2.8.0

* Add the ability to retrieve partner page details

### 2.7.0

* Add timeout to all requests

### 2.6.1

* Fix Leads not posting to correct endpoint

### 2.6.0

* Support for Leads endpoint

### 2.5.0

* Support for Careers endpoint

### 2.4.0

* Support for Support Enquiry endpoint

### 2.3.0

* Default API base endpoint is api.flippa.com.

### 2.2.1

* Fix DELETE requests not sending parameters.

### 2.2.0

* Support for sales page endpoint.

### 2.1.0

* Expose accessor and mutator for client access token.

### 2.0.0

* Support for watched item creation, watched item destruction, user creation,
  and user alert listing endpoints.
* Breaking: Re-arrangement of resource API methods.

### 1.0.0

* Package renamed from `flippa-node` to `flippa`.
* Move to more resource-oriented implementation.
* Breaking: Multiple API methods have moved, configuration keys have changed case.

### 0.5.0

* Updated the default API base endpoint.

### 0.4.0

* Added 'qs' library to handle conversion of query parameters to strings.

### 0.3.1

* Fixed a bug where URL parameters were not being properly encoded.

### 0.3.0

* Add a CHANGELOG.
* Support for saved search endpoints.
* Support for user identification endpoint.
* Support for session endpoint.
* Support for metrics endpoint.

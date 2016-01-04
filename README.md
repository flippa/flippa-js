# flippa

JavaScript API client for the [Flippa.com API](http://developers.flippa.com).

# Installation

```
npm install --save flippa
```

# Authentication

An access token can be requested using one of the supported OAuth2 grants:

```javascript
flippa = new Flippa();
flippa
  .authenticate({
    grant_type: "client_credentials",
    client_id: "123",
    client_secret: "shh"
  })
  .then(function(response) {
    // Authentication succeeded; can now make authorized requests.
    console.log(flippa.accessToken());
  })
```

The granted access token is stored in the client instance, meaning subsequent
requests using the same client do not need to authenticate again.

Alternately, the API client can be provided an access token directly when
constructed:

```javascript
flippa = new Flippa({accessToken: "some_token"});
```

# Examples

Retrieving open listings by user 123:

```javascript
flippa
  .listings
  .list({filter: {status: "open", user_id: 123}})
  .then(function(response) {
    console.log(response.body.data);
  })
```

For more usage examples, see [the documentation](http://developers.flippa.com).

# Timeout

All requests timeout after 15s by default. This is configurable via the
`timeout` option (in ms).

Example:

```js
// set default timeout to 10s
var flippa = new Flippa({timeout: 10000});
```

# Development

Running tests:

```shell
$ make build test
```

### Contributing

This project follows [semantic versioning](http://semver.org).

In order to make a change, do so from a feature branch and pull request the
project. Your pull request should not include a version change. Instead, make
an addition to the "head" version in the CHANGELOG that briefly describes the
change and ideally links to the pull request.

When releasing a new version, bump the version according to semver in
`package.json`, then push and publish it:

```shell
$ TAG=v1.2.3 make build test publish tag
```

# flippa

JavaScript API client for the [Flippa.com API](https://developers.flippa.com).

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

For more usage examples, see [the documentation](https://developers.flippa.com).

# Development

Running tests:

```shell
$ make build test
```

Publishing to npm:

```shell
$ TAG=v1.2.3 make build test publish tag
```

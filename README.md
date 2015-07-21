# flippa-node

node.js API client for Flippa.com API.

# Authentication

The API client can either be provided an access token directly when
constructed, or can request a token using one of the supported OAuth2 grant
types.

```javascript
flippa = new Flippa({accessToken: "some_token"});
```

### Client Credentials Grant

Currently, this grant type is limited to internal Flippa usage only.

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

# Examples

Retrieving open listings by user 123:

```javascript
flippa
  .listings()
  .list({filter: {status: "open", user_id: 123})
  .then(function(response) {
    console.log(response.body.data);
  })
```

# Development

Running tests:

```shell
$ make build test
```

Publishing to npm:

```shell
$ TAG=v1.2.3 make build test publish tag
```

export default class Listings {
  constructor(client) {
    this.client = client;
  }

  list(params) {
    return this.client.get("/listings", params);
  }
}

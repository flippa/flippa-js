export default class DomainTraits {
  constructor(client, listing_id) {
    this.client = client;
    this.listing_id = listing_id;
  }

  list() {
    return this.client.get(`/listings/${this.listing_id}/domain-traits`);
  }
}

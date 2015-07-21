import Resource from '../Resource'

export default class Listing extends Resource {
  constructor(client, listingId) {
    super(client);
    this.listingId = listingId;
  }

  retrieve() {
    return this.client.get(`/listings/${this.listingId}`);
  }

  listDomainTraits() {
    return this.client.get(`/listings/${this.listingId}/domain-traits`);
  }
}

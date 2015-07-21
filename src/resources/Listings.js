import Resource from '../Resource'

export default class Listings extends Resource {
  list(params={}) {
    return this.client.get("/listings", params);
  }

  retrieve(listingId) {
    return this.client.get(`/listings/${listingId}`);
  }

  listDomainTraits(listingId) {
    return this.client.get(`/listings/${listingId}/domain-traits`);
  }
}

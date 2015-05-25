import DomainTraits from "./DomainTraits"

export default class Listing {
  constructor(client, listing_id) {
    this.client = client;
    this.listing_id = listing_id;
  }

  domain_traits() {
    return new DomainTraits(this.client, this.listing_id);
  }
}

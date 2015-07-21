import Resource from '../Resource'

export default class Listings extends Resource {
  list(params={}) {
    return this.client.get("/listings", params);
  }
}

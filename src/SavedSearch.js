export default class SavedSearch {
  constructor(client, saved_search_id) {
    this.client = client;
    this.saved_search_id = saved_search_id;
  }

  del() {
    this.client.del(`/saved-searches/${this.saved_search_id}`)
  }
}

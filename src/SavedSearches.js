export default class SavedSearches {
  constructor(client, user_id) {
    this.client = client;
    this.user_id = user_id;
  }

  list() {
    return this.client.get(`/users/${this.user_id}/saved-searches`);
  }
}

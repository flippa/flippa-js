import Resource from '../Resource'

export default class User extends Resource {
  constructor(client, userId) {
    super(client);
    this.userId = userId;
  }

  retrieve() {
    return this.client.get(`/users/${this.userId}`);
  }

  listSavedSearches() {
    return this.client.get(`/users/${this.userId}/saved-searches`);
  }
}

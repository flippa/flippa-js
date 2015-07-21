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

  listAlerts() {
    return this.client.get(`/users/${this.userId}/alerts`);
  }

  createWatchedItem(params={}) {
    return this.client.post(`/users/${this.userId}/watched-items`, params);
  }

  delWatchedItem(params={}) {
    return this.client.del(`/users/${this.userId}/watched-items`, params);
  }
}

import Resource from '../Resource'

export default class Users extends Resource {
  retrieve(userId) {
    return this.client.get(`/users/${userId}`);
  }

  identify() {
    this.client.get("/users/identify");
  }

  listSavedSearches(userId) {
    return this.client.get(`/users/${userId}/saved-searches`);
  }
}

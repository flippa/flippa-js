import Resource from '../Resource'

export default class SavedSearch extends Resource {
  constructor(client, savedSearchId) {
    super(client);
    this.savedSearchId = savedSearchId;
  }

  list() {
    return this.client.get("/saved-searches");
  }

  create(params) {
    return this.client.post("/saved-searches", params);
  }

  del() {
    return this.client.del(`/saved-searches/${this.savedSearchId}`);
  }
}

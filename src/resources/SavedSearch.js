import Resource from '../Resource'

export default class SavedSearch extends Resource {
  constructor(client, savedSearchId) {
    super(client);
    this.savedSearchId = savedSearchId;
  }

  del() {
    return this.client.del(`/saved-searches/${this.savedSearchId}`);
  }
}

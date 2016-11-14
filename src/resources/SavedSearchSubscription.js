import Resource from '../Resource'

export default class SavedSearchSubscription extends Resource {
  constructor(client, savedSearchId) {
    super(client);
    this.savedSearchId = savedSearchId;
  }

  create() {
    return this.client.post(`/saved-searches/${this.savedSearchId}/subscription`);
  }

  del() {
    return this.client.del(`/saved-searches/${this.savedSearchId}/subscription`);
  }
}

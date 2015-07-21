import Resource from '../Resource'

export default class SavedSearches extends Resource {
  del(savedSearchId) {
    this.client.del(`/saved-searches/${savedSearchId}`)
  }
}

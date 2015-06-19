import SavedSearches from "./SavedSearches"

export default class User {
  constructor(client, user_id) {
    this.client = client;
    this.user_id = user_id;
  }

  saved_searches() {
    return new SavedSearches(this.client, this.user_id);
  }
}

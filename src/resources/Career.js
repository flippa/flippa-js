import Resource from '../Resource'

export default class Career extends Resource {
  constructor(client, careerId) {
    super(client);
    this.careerId = careerId;
  }

  retrieve() {
    return this.client.get(`/careers/${this.careerId}`);
  }
}

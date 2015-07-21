import Resource from '../Resource'

export default class SalesPage extends Resource {
  constructor(client, salesPageId) {
    super(client);
    this.salesPageId = salesPageId;
  }

  retrieve() {
    return this.client.get(`/sales-pages/${this.salesPageId}`);
  }
}

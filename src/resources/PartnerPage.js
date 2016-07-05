import Resource from '../Resource'

export default class PartnerPage extends Resource {
  constructor(client, pageName) {
    super(client);
    this.pageName = pageName;
  }

  retrieve() {
    return this.client.get(`/partner-pages/${this.pageName}`);
  }

}

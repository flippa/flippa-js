export default class Metrics {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.get("/metrics");
  }
}

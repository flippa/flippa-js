import Resource from '../Resource'

export default class Metrics extends Resource {
  list() {
    return this.client.get("/metrics");
  }
}

import Resource from '../Resource'

export default class Sessions extends Resource {
  create() {
    this.client.post("/sessions");
  }
}

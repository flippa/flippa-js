import Resource from '../Resource'

export default class Sessions extends Resource {
  create() {
    return this.client.post("/sessions");
  }
}

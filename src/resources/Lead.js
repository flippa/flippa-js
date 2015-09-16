import Resource from '../Resource'

export default class Lead extends Resource {
  create(params={}) {
    return this.client.post("/leads", params);
  }
}

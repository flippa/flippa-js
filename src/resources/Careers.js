import Resource from '../Resource'

export default class Careers extends Resource {
  list(params={}) {
    return this.client.get("/careers", params);
  }
}

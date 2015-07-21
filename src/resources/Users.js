import Resource from '../Resource'

export default class Users extends Resource {
  identify() {
    return this.client.get("/users/identify");
  }

  create(params={}) {
    return this.client.post("/users", params);
  }
}

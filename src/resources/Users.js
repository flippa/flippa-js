import Resource from '../Resource'

export default class Users extends Resource {
  identify() {
    return this.client.get("/users/identify");
  }
}

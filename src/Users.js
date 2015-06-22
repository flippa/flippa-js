export default class Users {
  constructor(client) {
    this.client = client;
  }

  identify() {
    this.client.get("/users/identify");
  }
}

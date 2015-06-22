export default class Sessions {
  constructor(client) {
    this.client = client;
  }

  create() {
    this.client.post("/sessions");
  }
}

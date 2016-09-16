import Resource from '../Resource'

export default class SessionFlashMessages extends Resource {
  list() {
    return this.client.get("/sessions/flash-messages");
  }
}

import Resource from '../Resource'

export default class Intercom extends Resource {
  retrieve() {
    return this.client.get('/intercom');
  }
}

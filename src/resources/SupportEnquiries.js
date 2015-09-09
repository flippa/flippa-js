import Resource from '../Resource'

export default class SupportEnquiries extends Resource {
  create(params={}) {
    return this.client.post("/support-enquiries", params);
  }
}

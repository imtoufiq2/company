import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  fetchBanner (data) {
    let url = this.buildUrl(endpoints.dashboard.fetchBanner);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
    ).then((response) => response);
  }
  showCaseData (data) {
    let url = this.buildUrl(endpoints.dashboard?.fetchShowcase);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
    ).then((response) => response);
  }
//this is for the testimonial
  fetchTestimonial (data) {
    let url = this.buildUrl(endpoints.dashboard.getTestimonials);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
    ).then((response) => response);
  }

  //this is for the FAQ
  getFaq (data) {
    let url = this.buildUrl(endpoints.dashboard.getFaq);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
    ).then((response) => response);
  }
}

import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  fetchBanner = (data) =>
    this.fetch(
      this.buildUrl(endpoints.dashboard.fetchBanner),
      "POST",
      JSON.stringify(data),
    );

  showCaseData = (data) =>
    this.fetch(
      this.buildUrl(endpoints.dashboard?.fetchShowcase),
      "POST",
      JSON.stringify(data),
    );

  //this is for the testimonial

  fetchTestimonial = (data) =>
    this.fetch(
      this.buildUrl(endpoints.dashboard.getTestimonials),
      "POST",
      JSON.stringify(data),
    );

  //this is for the FAQ
  getFaq = (data) =>
    this.fetch(
      this.buildUrl(endpoints.dashboard.getFaq),
      "POST",
      JSON.stringify(data),
    );
}

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
}

import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  getDiscoverData = (data) =>
    this.fetch(
      this.buildUrl(endpoints.discoverFd.getDiscover),
      "POST",
      JSON.stringify(data),
    );
}

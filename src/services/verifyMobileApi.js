import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  verifyMobileResendOtp = (data) =>
    this.fetch(
      this.buildUrl(endpoints.verifyMobile.resendOtp),
      "POST",
      JSON.stringify(data),
    );

  verifyMobileWithOtp = (data) =>
    this.fetch(
      this.buildUrl(endpoints.verifyMobile.verifyOtp),
      "POST",
      JSON.stringify(data),
    );
}

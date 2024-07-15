import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  fetchInvest = (data) =>
    this.fetch(
      this.buildUrl(endpoints?.invest.fetchInvest),
      "POST",
      JSON.stringify(data),
    );

  fetchIssuers = (data) =>
    this.fetch(
      this.buildUrl(endpoints.invest.fetchIssuers),
      "POST",
      JSON.stringify(data),
    );

  fetchCompareReturn = (data) =>
    this.fetch(
      this.buildUrl(endpoints.invest.fetchCompareReturn),
      "POST",
      JSON.stringify(data),
    );
}

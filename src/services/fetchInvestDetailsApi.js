import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  fetchInvestDetails = (data) =>
    this.fetch(
      this.buildUrl(endpoints.investDetails.fetchCard),
      "POST",
      JSON.stringify(data),
    );

  fetchTableData = (data) =>
    this.fetch(
      this.buildUrl(endpoints.investDetails.fetchTableData),
      "POST",
      JSON.stringify(data),
    );

  fetchSelectData = (data) =>
    this.fetch(
      this.buildUrl(endpoints.investDetails.fetchSelectData),
      "POST",
      JSON.stringify(data),
    );

  fetchSpecialOffer = (data) =>
    this.fetch(
      this.buildUrl(endpoints.investDetails.fetchSpecialOffer),
      "POST",
      JSON.stringify(data),
    );
}

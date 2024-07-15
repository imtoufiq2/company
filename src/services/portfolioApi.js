import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  fetchPortfolio = (data) =>
    this.fetch(
      this.buildUrl(endpoints.portfolio.fetchPortfolio),
      "POST",
      JSON.stringify(data),
    );

  fetchPassbook = (data) =>
    this.fetch(
      this.buildUrl(endpoints.portfolio.fetchPassbook),
      "POST",
      JSON.stringify(data),
    );

  fetchInvestmentDetail = (data) =>
    this.fetch(
      this.buildUrl(endpoints.portfolio.investmentDetails),
      "POST",
      JSON.stringify(data),
    );
}

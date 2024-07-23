import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  getIfsc = (data) =>
    this.fetch(
      this.buildUrl(endpoints.bankAccount.getIFSC),
      "POST",
      JSON.stringify(data),
    );

  verifyBank = (data) =>
    this.fetch(
      this.buildUrl(endpoints.bankAccount.verifyBank),
      "POST",
      JSON.stringify(data),
    );
}

import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  getIfsc(data) {
    // let url = this.buildUrl(endpoints.bankAccount.getIFSC);
    let url = this.buildUrl(endpoints.bankAccount.getIFSC);
    console.log("url-->", url);
    return this.fetch(url, "POST", JSON.stringify(data)).then(
      (response) => response,
    );
  }
}

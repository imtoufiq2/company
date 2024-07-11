import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  getDiscoverData(data) {
    // let url = this.buildUrl(endpoints.bankAccount.getIFSC);
    let url = this.buildUrl(endpoints.discoverFd.getDiscover);
    console.log("url-->", url);
    return this.fetch(url, "POST", JSON.stringify(data)).then(
      (response) => response,
    );
  }


}

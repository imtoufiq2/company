import Api from ".";
import { getData } from "../utils/Crypto";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  verifyPan(data) {
    let url = this.buildUrl(endpoints.kyc.verifyPan);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      getData("userData")?.access_token,
    ).then((response) => response);
  }

  savePan(data) {
    let url = this.buildUrl(endpoints.kyc.savePan);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      getData("userData")?.access_token,
    ).then((response) => response);
  }

  verifyLater(data) {
    let url = this.buildUrl(endpoints.kyc.verifyLater);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      getData("userData")?.access_token,
    ).then((response) => response);
  }
}

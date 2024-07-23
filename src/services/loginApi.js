import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  requestOtpForMobile = (data) =>
    this.fetch(this.buildUrl(endpoints.login), "POST", JSON.stringify(data));
}

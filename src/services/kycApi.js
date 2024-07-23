import Api from ".";
import { getData } from "../utils/Crypto";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
  verifyPan = (data) =>
    this.fetch(
      this.buildUrl(endpoints.kyc.verifyPan),
      "POST",
      JSON.stringify(data),
    );

  savePan = (data) =>
    this.fetch(
      this.buildUrl(endpoints.kyc.savePan),
      "POST",
      JSON.stringify(data),
    );

  verifyLater = (data) =>
    this.fetch(
      this.buildUrl(endpoints.kyc.verifyLater),
      "POST",
      JSON.stringify(data),
    );
}

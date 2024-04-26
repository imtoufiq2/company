import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  qrCodeGenerator(data) {
    let url = this.buildUrl(endpoints.bankVerification.getQrDetails);
    console.log("url-->", url);
    return this.fetch(url, "POST", JSON.stringify(data)).then(
      (response) => response,
    );
  }
}

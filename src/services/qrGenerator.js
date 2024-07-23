import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  qrCodeGenerator = (data) =>
    this.fetch(
      this.buildUrl(endpoints.bankAccount.getQrDetails),
      "POST",
      JSON.stringify(data),
    );
}

import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  getRefferralStats = (data) =>
    this.fetch(
      this.buildUrl(endpoints.referAndEarn.getRefererStats),
      "POST",
      JSON.stringify(data),
    );
}

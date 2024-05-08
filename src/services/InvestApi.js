import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  investFdDetails(data) {
    let url = this.buildUrl(endpoints.investApi.investFdDetails);
    console.log("url-->", url);
    return this.fetch(url, "POST", JSON.stringify(data)).then(
      (response) => response,
    );
  }
}

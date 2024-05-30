import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
    fetchInvest(data) {
        let url = this.buildUrl(endpoints?.invest.fetchInvest);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }  

    fetchIssuers (data) {
        let url = this.buildUrl(endpoints.invest.fetchIssuers);
        console.log("url-->", url);
        return this.fetch(
          url,
          "POST",
          JSON.stringify(data),
        ).then((response) => response);
      }
}

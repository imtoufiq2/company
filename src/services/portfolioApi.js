import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
    fetchPortfolio(data) {
        let url = this.buildUrl(endpoints.portfolio.fetchPortfolio);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }  
}

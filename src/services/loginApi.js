import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
    requestOtpForMobile(data) {
        let url = this.buildUrl(endpoints.login);
        console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }
   
    
}

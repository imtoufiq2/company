import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
    verifyMobileResendOtp(data) {
        let url = this.buildUrl(endpoints.verifyMobile.resendOtp);
        console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }
    // verifyOtp(data) {
    //     let url = this.buildUrl(endpoints.verifyMobile.verifyOtp);
    //     console.log("url-->", url);
    //     return this.fetch(url, "POST", JSON.stringify(data)).then(
    //         (response) => response,
    //     );
    // }
    verifyMobileWithOtp(data) {
        let url = this.buildUrl(endpoints.verifyMobile.verifyOtp);
        // console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }
    
}

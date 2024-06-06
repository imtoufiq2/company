import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
    fetchInvestDetails(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchCard);
        console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }  


    fetchTableData(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchTableData);
        console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    } 

    fetchSelectData(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchSelectData);
        console.log("url-->", url);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    } 
}

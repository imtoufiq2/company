import Api from ".";
import { endpoints } from "./endpoints";
// verifyMobileResendOtp
export default class ProofApi extends Api {
    fetchInvestDetails(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchCard);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    }  


    fetchTableData(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchTableData);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    } 

    fetchSelectData(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchSelectData);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    } 

    fetchSpecialOffer(data) {
        let url = this.buildUrl(endpoints.investDetails.fetchSpecialOffer);
        return this.fetch(url, "POST", JSON.stringify(data)).then(
            (response) => response,
        );
    } 
}

import Api from ".";
import { endpoints } from "./endpoints";
export default class ProofApi extends Api {
    getPersonalInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.getPersonalInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }


  updatePersonalInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.updatepersonalinfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }
}

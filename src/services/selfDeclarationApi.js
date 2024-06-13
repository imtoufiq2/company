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



  // ===== this is for the professional info ================
  getProfessionalInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.Professional.getProfessionalInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }

  getOccupationlInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.Professional.getOccupationInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }

  getAnualIncomeInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.Professional.getAnualIncomeInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }


  getSourceOfIncomeInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.Professional.getSourceOfIncomeInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }


  updateProfessionalInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.Professional.updateProfessionalinfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }


  // ============ this is for the declaratin ==============
  getDeclarationInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.declaration.getDeclarationInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }

  updateDeclarationInfo(data) {
    let url = this.buildUrl(endpoints.selfDeclaration.declaration.updateDeclarationInfo);
    console.log("url-->", url);
    return this.fetch(
      url,
      "POST",
      JSON.stringify(data),
      // getData("userData")?.access_token,
    ).then((response) => response);
  }
}

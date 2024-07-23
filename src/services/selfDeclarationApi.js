import Api from ".";
import { endpoints } from "./endpoints";
export default class ProofApi extends Api {
  getPersonalInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.getPersonalInfo),
      "POST",
      JSON.stringify(data),
    );

  updatePersonalInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.updatepersonalinfo),
      "POST",
      JSON.stringify(data),
    );

  // ===== this is for the professional info ================

  getProfessionalInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.Professional.getProfessionalInfo),
      "POST",
      JSON.stringify(data),
    );

  getOccupationlInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.Professional.getOccupationInfo),
      "POST",
      JSON.stringify(data),
    );

  getAnualIncomeInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.Professional.getAnualIncomeInfo),
      "POST",
      JSON.stringify(data),
    );

  getSourceOfIncomeInfo = (data) =>
    this.fetch(
      this.buildUrl(
        endpoints.selfDeclaration.Professional.getSourceOfIncomeInfo,
      ),
      "POST",
      JSON.stringify(data),
    );

  updateProfessionalInfo = (data) =>
    this.fetch(
      this.buildUrl(
        endpoints.selfDeclaration.Professional.updateProfessionalinfo,
      ),
      "POST",
      JSON.stringify(data),
    );

  // ============ this is for the declaratin ==============

  getDeclarationInfo = (data) =>
    this.fetch(
      this.buildUrl(endpoints.selfDeclaration.declaration.getDeclarationInfo),
      "POST",
      JSON.stringify(data),
    );

  updateDeclarationInfo = (data) =>
    this.fetch(
      this.buildUrl(
        endpoints.selfDeclaration.declaration.updateDeclarationInfo,
      ),
      "POST",
      JSON.stringify(data),
    );
}

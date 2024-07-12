import Api from ".";
import { endpoints } from "./endpoints";

export default class ProofApi extends Api {
  getBankAccountDetail(data) {
    return this.fetch(
      this.buildUrl(endpoints.profile.getBankAccountDetail),
      "POST",
      JSON.stringify(data),
    );
  }

  getPersonalInfoDetail(data) {
    return this.fetch(
      this.buildUrl(endpoints.profile.getPersonalDetail),
      "POST",
      JSON.stringify(data),
    );
  }

  fetchMainProfileDetail(data) {
    return this.fetch(
      this.buildUrl(endpoints.profile.getMainProfileDetail),
      "POST",
      JSON.stringify(data),
    );
  }

  deleteUser(data) {
    return this.fetch(
      this.buildUrl(endpoints.profile.deleteUser),
      "POST",
      JSON.stringify(data),
    );
  }
}

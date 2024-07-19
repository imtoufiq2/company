import { produce } from "immer";
import {
  GET_ANNUAL_INCOME_INFO,
  GET_ANNUAL_INCOME_INFO_FAILURE,
  GET_ANNUAL_INCOME_INFO_SUCCESS,
  GET_DECLARATION_INFO,
  GET_DECLARATION_INFO_FAILURE,
  GET_DECLARATION_INFO_SUCCESS,
  GET_OCCUPATION_INFO,
  GET_OCCUPATION_INFO_FAILURE,
  GET_OCCUPATION_INFO_SUCCESS,
  GET_PERSONAL_INFO,
  GET_PERSONAL_INFO_FAILURE,
  GET_PERSONAL_INFO_SUCCESS,
  GET_PROFESSIONAL_INFO,
  GET_PROFESSIONAL_INFO_FAILURE,
  GET_PROFESSIONAL_INFO_SUCCESS,
  GET_SOURCE_OF_INCOME_INFO,
  GET_SOURCE_OF_INCOME_INFO_FAILURE,
  GET_SOURCE_OF_INCOME_INFO_SUCCESS,
  UPDATE_DECLARATION_INFO,
  UPDATE_DECLARATION_INFO_FAILURE,
  UPDATE_DECLARATION_INFO_SUCCESS,
  UPDATE_PERSONAL_INFO,
  UPDATE_PERSONAL_INFO_FAILURE,
  UPDATE_PERSONAL_INFO_SUCCESS,
  UPDATE_PROFESSIONAL_INFO,
  UPDATE_PROFESSIONAL_INFO_FAILURE,
  UPDATE_PROFESSIONAL_INFO_SUCCESS,
} from "../types/selfDeclaration";

const initialState = {
  getPersonalInfoApiResponse: {
    is_indian_resident: 1,
    is_married: 1,
    gender: "",
    place_of_birth: "",
    isChecked: true,
  },
  getPersonalInfoApiResponseError: null,

  updatePersonalInfoApiResponse: null,
  updatePersonalInfoApiResponseError: null,

  professionalInfo: {
    getProfessionalInfoApiResponse: null,
    getProfessionalInfoApiResponseError: null,

    getOccupationlInfoApiResponse: null,
    getOccupationlInfoApiResponseError: null,

    getAnualIncomeInfoApiResponse: null,
    getAnualIncomeInfoApiResponseError: null,

    getSourceOfIncomeInfoApiResponse: null,
    getSourceOfIncomeInfoApiResponseError: null,

    updateProfessionalInfoApiResponse: null,
    updateProfessionalInfoApiResponseError: null,
  },

  declaration: {
    getApiResponse: null,
    getApiResponseError: null,

    postApiResponse: null,
    postApiResponseError: null,
  },
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    //this is for the personal get call
    case GET_PERSONAL_INFO:
      state.getPersonalInfoApiResponseError = null;
      return;
    case GET_PERSONAL_INFO_SUCCESS:
      state.getPersonalInfoApiResponse = { ...payload };
      return;
    case GET_PERSONAL_INFO_FAILURE:
      state.getPersonalInfoApiResponseError = error;
      return;

    //this is for the personal post call
    case UPDATE_PERSONAL_INFO:
      state.updatePersonalInfoApiResponseError = null;
      return;
    case UPDATE_PERSONAL_INFO_SUCCESS:
      state.updatePersonalInfoApiResponse = payload;
      return;
    case UPDATE_PERSONAL_INFO_FAILURE:
      state.updatePersonalInfoApiResponseError = error;
      return;

    // ========== this is for the professionalInfo ==========
    case GET_PROFESSIONAL_INFO:
      // getProfessionalInfoApiResponse
      state.professionalInfo.getProfessionalInfoApiResponseError = null;
      return;
    case GET_PROFESSIONAL_INFO_SUCCESS:
      state.professionalInfo.getProfessionalInfoApiResponseError = null;
      state.professionalInfo.getProfessionalInfoApiResponse = payload;
      return;
    case GET_PROFESSIONAL_INFO_FAILURE:
      state.professionalInfo.getProfessionalInfoApiResponseError = error;
      return;
    // ========== this is for the occupational info ==========
    case GET_OCCUPATION_INFO:
      state.professionalInfo.getOccupationlInfoApiResponseError = null;
      return;
    case GET_OCCUPATION_INFO_SUCCESS:
      state.professionalInfo.getOccupationlInfoApiResponseError = null;
      state.professionalInfo.getOccupationlInfoApiResponse = payload;
      return;
    case GET_OCCUPATION_INFO_FAILURE:
      state.professionalInfo.getOccupationlInfoApiResponseError = error;
      return;

    // ========== this is for the anual income info ==========
    case GET_ANNUAL_INCOME_INFO:
      state.professionalInfo.getAnualIncomeInfoApiResponseError = null;
      return;
    case GET_ANNUAL_INCOME_INFO_SUCCESS:
      state.professionalInfo.getAnualIncomeInfoApiResponseError = null;
      state.professionalInfo.getAnualIncomeInfoApiResponse = payload;
      return;
    case GET_ANNUAL_INCOME_INFO_FAILURE:
      state.professionalInfo.getAnualIncomeInfoApiResponseError = error;
      return;

    // ========== this is for the source of income info ==========
    case GET_SOURCE_OF_INCOME_INFO:
      state.professionalInfo.getSourceOfIncomeInfoApiResponseError = null;
      return;
    case GET_SOURCE_OF_INCOME_INFO_SUCCESS:
      state.professionalInfo.getSourceOfIncomeInfoApiResponseError = null;
      state.professionalInfo.getSourceOfIncomeInfoApiResponse = payload;
      return;
    case GET_SOURCE_OF_INCOME_INFO_FAILURE:
      state.professionalInfo.getSourceOfIncomeInfoApiResponseError = error;
      return;

    // ========== this is for the source of income info ==========
    case UPDATE_PROFESSIONAL_INFO:
      state.professionalInfo.updateProfessionalInfoApiResponseError = null;
      return;
    case UPDATE_PROFESSIONAL_INFO_SUCCESS:
      state.professionalInfo.updateProfessionalInfoApiResponseError = null;
      state.professionalInfo.updateProfessionalInfoApiResponse = payload;
      return;
    case UPDATE_PROFESSIONAL_INFO_FAILURE:
      state.professionalInfo.updateProfessionalInfoApiResponseError = error;
      return;

    // ========== this is for the self declarationinfo ==========
    case GET_DECLARATION_INFO:
      state.declaration.getApiResponseError = null;
      return;
    case GET_DECLARATION_INFO_SUCCESS:
      state.declaration.getApiResponseError = null;
      state.declaration.getApiResponse = payload;
      return;
    case GET_DECLARATION_INFO_FAILURE:
      state.declaration.getApiResponseError = error;
      return;

    // ========== this is for the self declaration info  POST ==========
    case UPDATE_DECLARATION_INFO:
      state.declaration.postApiResponseError = null;
      return;
    case UPDATE_DECLARATION_INFO_SUCCESS:
      state.declaration.postApiResponseError = null;
      state.declaration.postApiResponse = payload;
      return;
    case UPDATE_DECLARATION_INFO_FAILURE:
      state.declaration.postApiResponseError = error;
      return;

    default:
      return state;
  }
});

export default reducer;

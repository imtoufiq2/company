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

// this is for the personal info GET Call
export const getPersonalInfo = (payload) => ({
  type: GET_PERSONAL_INFO,
  payload,
});

export const getPersonalInfoSuccess = (payload) => ({
  type: GET_PERSONAL_INFO_SUCCESS,
  payload,
});

export const getPersonalInfoFailure = (error) => ({
  type: GET_PERSONAL_INFO_FAILURE,
  error,
});

// this is for the personal info POST Call

export const updatePersonalInfo = (payload) => ({
  type: UPDATE_PERSONAL_INFO,
  payload,
});

export const updatePersonalInfoSuccess = (payload) => ({
  type: UPDATE_PERSONAL_INFO_SUCCESS,
  payload,
});

export const updatePersonalInfoFailure = (error) => ({
  type: UPDATE_PERSONAL_INFO_FAILURE,
  error,
});

// ============ this is for the professional page ===========

// this is for the Professional info GET Call
export const getProfessionalInfo = (payload) => ({
  type: GET_PROFESSIONAL_INFO,
  payload,
});

export const getProfessionalInfoSuccess = (payload) => ({
  type: GET_PROFESSIONAL_INFO_SUCCESS,
  payload,
});

export const getProfessionalInfoFailure = (error) => ({
  type: GET_PROFESSIONAL_INFO_FAILURE,
  error,
});

// this is for the occupation info GET Call
export const getOccupationlInfo = (payload) => ({
  type: GET_OCCUPATION_INFO,
  payload,
});

export const getOccupationlInfoSuccess = (payload) => ({
  type: GET_OCCUPATION_INFO_SUCCESS,
  payload,
});

export const getOccupationlInfoFailure = (error) => ({
  type: GET_OCCUPATION_INFO_FAILURE,
  error,
});

// this is for the anual income info GET Call
export const getAnualIncomeInfo = (payload) => ({
  type: GET_ANNUAL_INCOME_INFO,
  payload,
});

export const getAnualIncomeInfoSuccess = (payload) => ({
  type: GET_ANNUAL_INCOME_INFO_SUCCESS,
  payload,
});

export const getAnualIncomeInfoFailure = (error) => ({
  type: GET_ANNUAL_INCOME_INFO_FAILURE,
  error,
});

// this is for the source of Income info GET Call
export const getSourceOfIncomeInfo = (payload) => ({
  type: GET_SOURCE_OF_INCOME_INFO,
  payload,
});

export const getSourceOfIncomeInfoSuccess = (payload) => ({
  type: GET_SOURCE_OF_INCOME_INFO_SUCCESS,
  payload,
});

export const getSourceOfIncomeInfoFailure = (error) => ({
  type: GET_SOURCE_OF_INCOME_INFO_FAILURE,
  error,
});

// this is for the Professional info POST Call
export const updateProfessionalInfo = (payload) => ({
  type: UPDATE_PROFESSIONAL_INFO,
  payload,
});

export const updateProfessionalInfoSuccess = (payload) => ({
  type: UPDATE_PROFESSIONAL_INFO_SUCCESS,
  payload,
});

export const updateProfessionalInfoFailure = (error) => ({
  type: UPDATE_PROFESSIONAL_INFO_FAILURE,
  error,
});

// =============== this is for the declaration ==================
export const getDeclarationInfo = (payload) => ({
  type: GET_DECLARATION_INFO,
  payload,
});

export const getDeclarationInfoSuccess = (payload) => ({
  type: GET_DECLARATION_INFO_SUCCESS,
  payload,
});

export const getDeclarationInfoFailure = (error) => ({
  type: GET_DECLARATION_INFO_FAILURE,
  error,
});

// this is for the update one
export const updateDeclarationInfo = (payload) => ({
  type: UPDATE_DECLARATION_INFO,
  payload,
});

export const updateDeclarationInfoSuccess = (payload) => ({
  type: UPDATE_DECLARATION_INFO_SUCCESS,
  payload,
});

export const updateDeclarationInfoFailure = (error) => ({
  type: UPDATE_DECLARATION_INFO_FAILURE,
  error,
});

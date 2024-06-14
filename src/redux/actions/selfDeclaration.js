import { GET_ANNUAL_INCOME_INFO, GET_ANNUAL_INCOME_INFO_FAILURE, GET_ANNUAL_INCOME_INFO_SUCCESS, GET_DECLARATION_INFO, GET_DECLARATION_INFO_FAILURE, GET_DECLARATION_INFO_SUCCESS, GET_OCCUPATION_INFO, GET_OCCUPATION_INFO_FAILURE, GET_OCCUPATION_INFO_SUCCESS, GET_PERSONAL_INFO, GET_PERSONAL_INFO_FAILURE, GET_PERSONAL_INFO_SUCCESS, GET_PROFESSIONAL_INFO, GET_PROFESSIONAL_INFO_FAILURE, GET_PROFESSIONAL_INFO_SUCCESS, GET_SOURCE_OF_INCOME_INFO, GET_SOURCE_OF_INCOME_INFO_FAILURE, GET_SOURCE_OF_INCOME_INFO_SUCCESS, UPDATE_DECLARATION_INFO, UPDATE_DECLARATION_INFO_FAILURE, UPDATE_DECLARATION_INFO_SUCCESS, UPDATE_PERSONAL_INFO, UPDATE_PERSONAL_INFO_FAILURE, UPDATE_PERSONAL_INFO_SUCCESS, UPDATE_PROFESSIONAL_INFO, UPDATE_PROFESSIONAL_INFO_FAILURE, UPDATE_PROFESSIONAL_INFO_SUCCESS } from "../types/selfDeclaration";



// this is for the personal info GET Call
export function getPersonalInfo(payload) {
  return {
    type: GET_PERSONAL_INFO,
    payload: payload,
  };
}

export function getPersonalInfoSuccess(payload) {
  return {
    type: GET_PERSONAL_INFO_SUCCESS,
    payload: payload,
  };
}

export function getPersonalInfoFailure(error) {
  return {
    type: GET_PERSONAL_INFO_FAILURE,
    error,
  };
}

// this is for the personal info POST Call

export function updatePersonalInfo(payload) {
  return {
    type: UPDATE_PERSONAL_INFO,
    payload: payload,
  };
}

export function updatePersonalInfoSuccess(payload) {
  return {
    type: UPDATE_PERSONAL_INFO_SUCCESS,
    payload: payload,
  };
}

export function updatePersonalInfoFailure(error) {
  return {
    type: UPDATE_PERSONAL_INFO_FAILURE,
    error,
  };
}

// ============ this is for the professional page ===========

// this is for the Professional info GET Call
export function getProfessionalInfo(payload) {
  return {
    type: GET_PROFESSIONAL_INFO,
    payload: payload,
  };
}

export function getProfessionalInfoSuccess(payload) {
  return {
    type: GET_PROFESSIONAL_INFO_SUCCESS,
    payload: payload,
  };
}

export function getProfessionalInfoFailure(error) {
  return {
    type: GET_PROFESSIONAL_INFO_FAILURE,
    error,
  };
}

// this is for the occupation info GET Call
export function getOccupationlInfo(payload) {
  return {
    type: GET_OCCUPATION_INFO,
    payload: payload,
  };
}

export function getOccupationlInfoSuccess(payload) {
  return {
    type: GET_OCCUPATION_INFO_SUCCESS,
    payload: payload,
  };
}

export function getOccupationlInfoFailure(error) {
  return {
    type: GET_OCCUPATION_INFO_FAILURE,
    error,
  };
}

// this is for the anual income info GET Call
export function getAnualIncomeInfo(payload) {
  return {
    type: GET_ANNUAL_INCOME_INFO,
    payload: payload,
  };
}

export function getAnualIncomeInfoSuccess(payload) {
  return {
    type: GET_ANNUAL_INCOME_INFO_SUCCESS,
    payload: payload,
  };
}

export function getAnualIncomeInfoFailure(error) {
  return {
    type: GET_ANNUAL_INCOME_INFO_FAILURE,
    error,
  };
}

// this is for the source of Income info GET Call
export function getSourceOfIncomeInfo(payload) {
  return {
    type: GET_SOURCE_OF_INCOME_INFO,
    payload: payload,
  };
}

export function getSourceOfIncomeInfoSuccess(payload) {
  return {
    type: GET_SOURCE_OF_INCOME_INFO_SUCCESS,
    payload: payload,
  };
}

export function getSourceOfIncomeInfoFailure(error) {
  return {
    type: GET_SOURCE_OF_INCOME_INFO_FAILURE,
    error,
  };
}


// this is for the Professional info POST Call
export function updateProfessionalInfo(payload) {
  return {
    type: UPDATE_PROFESSIONAL_INFO,
    payload: payload,
  };
}

export function updateProfessionalInfoSuccess(payload) {
  return {
    type: UPDATE_PROFESSIONAL_INFO_SUCCESS,
    payload: payload,
  };
}

export function updateProfessionalInfoFailure(error) {
  return {
    type: UPDATE_PROFESSIONAL_INFO_FAILURE,
    error,
  };
}


// =============== this is for the declaration ==================
export function getDeclarationInfo(payload) {
  return {
    type: GET_DECLARATION_INFO,
    payload: payload,
  };
}

export function getDeclarationInfoSuccess(payload) {
  return {
    type: GET_DECLARATION_INFO_SUCCESS,
    payload: payload,
  };
}

export function getDeclarationInfoFailure(error) {
  return {
    type: GET_DECLARATION_INFO_FAILURE,
    error,
  };
}
// this is for the update one
export function updateDeclarationInfo(payload) {
  return {
    type: UPDATE_DECLARATION_INFO,
    payload: payload,
  };
}

export function updateDeclarationInfoSuccess(payload) {
  return {
    type: UPDATE_DECLARATION_INFO_SUCCESS,
    payload: payload,
  };
}

export function updateDeclarationInfoFailure(error) {
  return {
    type: UPDATE_DECLARATION_INFO_FAILURE,
    error,
  };
}

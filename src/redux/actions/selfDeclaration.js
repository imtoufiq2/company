import { GET_PERSONAL_INFO, GET_PERSONAL_INFO_FAILURE, GET_PERSONAL_INFO_SUCCESS, UPDATE_PERSONAL_INFO, UPDATE_PERSONAL_INFO_FAILURE, UPDATE_PERSONAL_INFO_SUCCESS } from "../types/selfDeclaration";

export function getPersonalInfo(payload) {
  return {
    type: GET_PERSONAL_INFO,
    payload: payload,
  };
}

export function getPersonalInfoSuccess(payload) {
  // console.log("getPersonalInfo", payload)
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




// ============== update code ==========

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


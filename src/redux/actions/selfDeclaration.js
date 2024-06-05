import { UPDATE_PERSONAL_INFO, UPDATE_PERSONAL_INFO_FAILURE, UPDATE_PERSONAL_INFO_SUCCESS } from "../types/selfDeclaration";

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


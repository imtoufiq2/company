import {
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  FETCH_BANK_DETAILS,
  FETCH_BANK_DETAILS_FAILURE,
  FETCH_BANK_DETAILS_SUCCESS,
  FETCH_MAIN_PROFILE_DETAILS,
  FETCH_MAIN_PROFILE_DETAILS_FAILURE,
  FETCH_MAIN_PROFILE_DETAILS_SUCCESS,
  FETCH_PROFILE_DETAILS,
  FETCH_PROFILE_DETAILS_FAILURE,
  FETCH_PROFILE_DETAILS_SUCCESS,
} from "../types/profile";

//this is for the bank account details
export const fetchBankAccountDetail = (payload) => ({
  type: FETCH_BANK_DETAILS,
  payload,
});

export const fetchBankAccountDetailSuccess = (payload) => ({
  type: FETCH_BANK_DETAILS_SUCCESS,
  payload,
});

export const fetchBankAccountDetailFailure = (error) => ({
  type: FETCH_BANK_DETAILS_FAILURE,
  error,
});

//this is for the bank profile Personal Details
export const fetchPersonalInfoDetail = (payload) => ({
  type: FETCH_PROFILE_DETAILS,
  payload,
});

export const fetchPersonalInfoDetailSuccess = (payload) => ({
  type: FETCH_PROFILE_DETAILS_SUCCESS,
  payload,
});

export const fetchPersonalInfoDetailFailure = (error) => ({
  type: FETCH_PROFILE_DETAILS_FAILURE,
  error,
});

//this is for MIAN PROFILE Details
export const fetchMainProfileDetail = (payload) => ({
  type: FETCH_MAIN_PROFILE_DETAILS,
  payload,
});

export const fetchMainProfileDetailSuccess = (payload) => ({
  type: FETCH_MAIN_PROFILE_DETAILS_SUCCESS,
  payload,
});

export const fetchMainProfileDetailFailure = (error) => ({
  type: FETCH_MAIN_PROFILE_DETAILS_FAILURE,
  error,
});

//this is for DELETE User
export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const deleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserlFailure = (error) => ({
  type: DELETE_USER_FAILURE,
  error,
});

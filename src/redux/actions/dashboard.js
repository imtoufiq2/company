import {
  FETCH_BANNER,
  FETCH_BANNER_FAILURE,
  FETCH_BANNER_SUCCESS,
  FETCH_SHOWCASE,
  FETCH_SHOWCASE_FAILURE,
  FETCH_SHOWCASE_SUCCESS,
} from "../types/dashboard";


export const fetchBanner = (payload) => {
  return {
    type: FETCH_BANNER,
    payload,
  };
};

export const fetchBannerSuccess = (payload) => {
  return {
    type: FETCH_BANNER_SUCCESS,
    payload,
  };
};

export const fetchBannerFailure = (error) => {
  return {
    type: FETCH_BANNER_FAILURE,
    error,
  };
};

//this is for the showcase
export const fetchShowCase = (payload) => {
  return {
    type: FETCH_SHOWCASE,
    payload,
  }
};
export const fetchShowCaseSuccess = (payload) => {
  return {
    type: FETCH_SHOWCASE_SUCCESS,
  payload,
  }
};

export const fetchShowCaseFailure = (error) => {
  return {
    type: FETCH_SHOWCASE_FAILURE,
  error,
  }
};

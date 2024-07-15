import {
  REQUEST_OTP_FOR_MOBILE,
  REQUEST_OTP_FOR_MOBILE_FAILURE,
  REQUEST_OTP_FOR_MOBILE_SUCCESS,
} from "../types/login";

export const requestOtpForMobile = (payload) => ({
  type: REQUEST_OTP_FOR_MOBILE,
  payload,
});

export const requestOtpForMobileSuccess = (payload) => ({
  type: REQUEST_OTP_FOR_MOBILE_SUCCESS,
  payload,
});

export const requestOtpForMobileFailure = (error) => ({
  type: REQUEST_OTP_FOR_MOBILE_FAILURE,
  error,
});

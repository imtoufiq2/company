import { REQUEST_OTP_FOR_MOBILE, REQUEST_OTP_FOR_MOBILE_FAILURE, REQUEST_OTP_FOR_MOBILE_SUCCESS } from "../types/login";

export function requestOtpForMobile(payload) {

  return {
    type: REQUEST_OTP_FOR_MOBILE,
    payload: payload,
  };
}
export function requestOtpForMobileSuccess(payload) {

  return {
    type: REQUEST_OTP_FOR_MOBILE_SUCCESS,
    payload: payload,
  };
}

export function requestOtpForMobileFailure(error) {

  return {
    type: REQUEST_OTP_FOR_MOBILE_FAILURE,
    error,
  };
}


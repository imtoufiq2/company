import { VERIFY_MOBILE_RESEND_OTP, VERIFY_MOBILE_RESEND_OTP_FAILURE, VERIFY_MOBILE_RESEND_OTP_SUCCESS, VERIFY_MOBILE_WITH_OTP, VERIFY_MOBILE_WITH_OTP_FAILURE, VERIFY_MOBILE_WITH_OTP_SUCCESS } from "../types/verifyMobile";


export function verifyMobileWithOtp(payload) {
  return {
    type: VERIFY_MOBILE_WITH_OTP,
    payload: payload,
  };
}
export function verifyMobileWithOtpSuccess(payload) {
  return {
    type: VERIFY_MOBILE_WITH_OTP_SUCCESS,
    payload: payload,
  };
}
export function verifyMobileWithOtpFailure(error) {
  return {
    type: VERIFY_MOBILE_WITH_OTP_FAILURE,
    error,
  };
}


//this is for the resent .
export function verifyMobileResendOtp(payload) {
  return {
    type: VERIFY_MOBILE_RESEND_OTP,
    payload: payload,
  };
}

export function verifyMobileResendOtpSuccess(payload) {

  return {
    type: VERIFY_MOBILE_RESEND_OTP_SUCCESS,
    payload: payload,
  };
}
export function verifyMobileResendOtpFailure(error) {
 
  return {
    type: VERIFY_MOBILE_RESEND_OTP_FAILURE,
    error,
  };
}

import {
  VERIFY_MOBILE_RESEND_OTP,
  VERIFY_MOBILE_RESEND_OTP_FAILURE,
  VERIFY_MOBILE_RESEND_OTP_SUCCESS,
  VERIFY_MOBILE_WITH_OTP,
  VERIFY_MOBILE_WITH_OTP_FAILURE,
  VERIFY_MOBILE_WITH_OTP_SUCCESS,
} from "../types/verifyMobile";

export const verifyMobileWithOtp = (payload) => ({
  type: VERIFY_MOBILE_WITH_OTP,
  payload,
});

export const verifyMobileWithOtpSuccess = (payload) => ({
  type: VERIFY_MOBILE_WITH_OTP_SUCCESS,
  payload,
});

export const verifyMobileWithOtpFailure = (error) => ({
  type: VERIFY_MOBILE_WITH_OTP_FAILURE,
  error,
});

//this is for the resent .
export const verifyMobileResendOtp = (payload) => ({
  type: VERIFY_MOBILE_RESEND_OTP,
  payload,
});

export const verifyMobileResendOtpSuccess = (payload) => ({
  type: VERIFY_MOBILE_RESEND_OTP_SUCCESS,
  payload,
});

export const verifyMobileResendOtpFailure = (error) => ({
  type: VERIFY_MOBILE_RESEND_OTP_FAILURE,
  error,
});

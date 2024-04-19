import { VERIFY_MOBILE_RESEND_OTP, VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";

export const verifyMobileResendOtp = (payload) => ({
  type: VERIFY_MOBILE_RESEND_OTP,
  payload,
});
export const verifyMobileWithOtp = (payload) => ({
  type:  VERIFY_MOBILE_WITH_OTP,
  payload,
});


import { VERIFY_MOBILE_RESEND_OTP } from "../types/verifyMobile";

export const verifyMobileResendOtp = (payload) => ({
  type: VERIFY_MOBILE_RESEND_OTP,
  payload,
});

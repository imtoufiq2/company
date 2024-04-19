import { REQUEST_OTP_FOR_MOBILE } from "../types/login";


export const requestOtpForMobile = (payload) => ({
  type: REQUEST_OTP_FOR_MOBILE,
  payload,
});

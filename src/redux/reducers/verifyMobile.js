// import { produce } from "immer";
// import { VERIFY_MOBILE_RESEND_OTP , VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";

// const initialState = {
//   verifyMobileResendOtp: null,
// };

// const reducer = produce((state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case VERIFY_MOBILE_RESEND_OTP:
//       // return { ...state, ...payload };
//       state.verifyMobileResendOtp = payload;
//       return;

//       case VERIFY_MOBILE_WITH_OTP:
//       // return { ...state, ...payload };
//       state.verifyMobileWithOtp = payload;
//       return;

//     default:
//       return state;
//   }
// });

// export default reducer;

import { produce } from "immer";
import {
  VERIFY_MOBILE_RESEND_OTP,
  VERIFY_MOBILE_RESEND_OTP_FAILURE,
  VERIFY_MOBILE_RESEND_OTP_SUCCESS,
  VERIFY_MOBILE_WITH_OTP,
  VERIFY_MOBILE_WITH_OTP_FAILURE,
  VERIFY_MOBILE_WITH_OTP_SUCCESS,
} from "../types/verifyMobile";

const initialState = {
  mobileVerificationResponse: null,
  verifyMobileResendOtpResponse: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case VERIFY_MOBILE_WITH_OTP:
      state.error = null;
      return;
    case VERIFY_MOBILE_WITH_OTP_SUCCESS:
      state.mobileVerificationResponse = payload;
      return;
    case VERIFY_MOBILE_WITH_OTP_FAILURE:
      state.error = error;
      return;

    //this is for the resent otp

    case VERIFY_MOBILE_RESEND_OTP:
      state.error = null;
      return;
    case VERIFY_MOBILE_RESEND_OTP_SUCCESS:
      state.verifyMobileResendOtpResponse = payload;
      return;
    case VERIFY_MOBILE_RESEND_OTP_FAILURE:
      state.error = error;
      return;
    default:
      return state;
  }
});

export default reducer;

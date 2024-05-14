import { produce } from "immer";
import { VERIFY_MOBILE_RESEND_OTP , VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";

const initialState = {
  verifyMobileResendOtp: [],
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  // console.log(
  //   "In reducers *** type=>",
  //   type,
  //   "payload=>",
  //   payload,
  //   "action=>",
  //   action,
  //   "state=>",
  //   state
  // );

  switch (type) {
    case VERIFY_MOBILE_RESEND_OTP:
      // return { ...state, ...payload };
      state.verifyMobileResendOtp = payload;
      return;

      case VERIFY_MOBILE_WITH_OTP:
      // return { ...state, ...payload };
      state.verifyMobileWithOtp = payload;
      return;

    default:
      return state;
  }
});

export default reducer;

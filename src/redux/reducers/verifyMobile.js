import { produce } from "immer";
import { VERIFY_MOBILE_RESEND_OTP } from "../types/verifyMobile";

const initialState = {
  verifyMobileResendOtp: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  console.log(
    "In reducers *** type=>",
    type,
    "payload=>",
    payload,
    "action=>",
    action,
    "state=>",
    state,
  );

  switch (type) {
    case VERIFY_MOBILE_RESEND_OTP:
      // return { ...state, ...payload };
      state.verifyMobileResendOtp = payload;
      return;
    default:
      return state;
  }
});

export default reducer;

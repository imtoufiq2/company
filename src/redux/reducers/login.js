import { produce } from "immer";
import { REQUEST_OTP_FOR_MOBILE, REQUEST_OTP_FOR_MOBILE_FAILURE, REQUEST_OTP_FOR_MOBILE_SUCCESS } from "../types/login";

const initialState = {
  mobileNumber: "",
  otpResponse: null,
  error: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case REQUEST_OTP_FOR_MOBILE:
    state.mobileNumber = payload?.mobile_no;
    state.error = null;
    return;
  case REQUEST_OTP_FOR_MOBILE_SUCCESS:
    state.otpResponse = payload;
    return;
  case REQUEST_OTP_FOR_MOBILE_FAILURE:
    state.error = error;
    return;
  default:
    return state;
  }
});

export default reducer;

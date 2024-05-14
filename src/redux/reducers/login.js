import { produce } from "immer";
import { REQUEST_OTP_FOR_MOBILE } from "../types/login";

const initialState = {
  mobileNumber: "",
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
    case REQUEST_OTP_FOR_MOBILE:
      // return { ...state, ...payload };
      state.mobileNumber = payload;
      return;
    default:
      return state;
  }
});

export default reducer;

import { produce } from "immer";
// import { VERIFY_MOBILE_RESEND_OTP , VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";
import { FETCH_BANNER } from "../types/dashboard";

const initialState = {
    fetchData: {}
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
    case FETCH_BANNER:
      // return { ...state, ...payload };
      state.verifyPan = payload;
      return;

    //   case SAVE_PAN:
    //     // return { ...state, ...payload };
    //     state.savePan = payload;
    //     return;
    //     case VERIFY_LATER:
    //       // return { ...state, ...payload };
    //       state.verifyLater = payload;
    //       return;
    default:
      return state;
  }
});

export default reducer;

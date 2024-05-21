import { produce } from "immer";
// import { VERIFY_MOBILE_RESEND_OTP , VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";
import { FETCH_BANNER, FETCH_SHOWCASE } from "../types/dashboard";

const initialState = {
    bannerData: {},
    showCaseData:{}
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;


  switch (type) {
    case FETCH_BANNER:
      state.bannerData = payload;
      console.log("paylo============ad", payload)
      return;
      case FETCH_SHOWCASE:
        state.bannerData = payload;
        console.log("paylo============ad", payload)
        return;
  
    default:
      return state;
  }
});

export default reducer;

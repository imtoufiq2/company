import { produce } from "immer";
import { GET_IFSC, VERIFY_BANK } from "../types/addBank";
// import { VERIFY_MOBILE_RESEND_OTP , VERIFY_MOBILE_WITH_OTP } from "../types/verifyMobile";


const initialState = {
    getIFSC: {},
    verifyBank:{}
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
    case GET_IFSC:
      // return { ...state, ...payload };
      state.getIfsc = payload;
      return;
      case VERIFY_BANK:
        // return { ...state, ...payload };
        state.verifyBank = payload;
        return;
      
      
    default:
      return state;
  }
});

export default reducer;

import { produce } from "immer";
import { SAVE_PAN, VERIFY_LATER, VERIFY_PAN } from "../types/kyc";

const initialState = {
    savePan: [],
    verifyPan:[]
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
    case VERIFY_PAN:
      // return { ...state, ...payload };
      state.verifyPan = payload;
      return;

      case SAVE_PAN:
        // return { ...state, ...payload };
        state.savePan = payload;
        return;
        case VERIFY_LATER:
          // return { ...state, ...payload };
          state.verifyLater = payload;
          return;
    default:
      return state;
  }
});

export default reducer;

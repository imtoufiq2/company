import { produce } from "immer";
import { GET_MOBILE_NUMBER } from "../types/login";

const initialState = {
  mobileNumber: "",
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
    state
  );

  switch (type) {
    case GET_MOBILE_NUMBER:
      // return { ...state, ...payload };
      state.mobileNumber = payload;
      return;
    default:
      return state;
  }
});

export default reducer;

import { produce } from "immer";
import { UPDATE_PERSONAL_INFO, UPDATE_PERSONAL_INFO_FAILURE, UPDATE_PERSONAL_INFO_SUCCESS } from "../types/selfDeclaration";

const initialState = {
  responseData: null,
  error: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case UPDATE_PERSONAL_INFO:
    // state.responseData = payload?.mobile_no;
    state.error = null;
    return;
  case UPDATE_PERSONAL_INFO_SUCCESS:
    state.responseData = payload;
    return;
  case UPDATE_PERSONAL_INFO_FAILURE:
    state.error = error;
    return;
  default:
    return state;
  }
});

export default reducer;

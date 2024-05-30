import { produce } from "immer";

import { FETCH_BANNER, FETCH_BANNER_FAILURE, FETCH_BANNER_SUCCESS, FETCH_SHOWCASE, FETCH_SHOWCASE_FAILURE, FETCH_SHOWCASE_SUCCESS } from "../types/dashboard";

const initialState = {
    bannerData: [],
    showCaseData:null,
    error: null,
};


const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case FETCH_BANNER:
    state.error = null;
    return;
  case FETCH_BANNER_SUCCESS:
    state.bannerData = [...payload];
    return;
  case FETCH_BANNER_FAILURE:
    state.error = error;
    return;


    //showcase data
    case FETCH_SHOWCASE:
      state.error = null;
      return;
    case FETCH_SHOWCASE_SUCCESS:
      state.showCaseData = payload;
      return;
    case FETCH_SHOWCASE_FAILURE:
      state.error = error;
      return;
  default:
    return state;
  }
});
export default reducer;

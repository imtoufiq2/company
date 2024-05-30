import { produce } from "immer";
import {
  FETCH_INVEST,
  FETCH_INVEST_FAILURE,
  FETCH_INVEST_SUCCESS,
  FETCH_ISSUERS,
  FETCH_ISSUERS_FAILURE,
  FETCH_ISSUERS_SUCCESS,
} from "../types/invest";

const initialState = {
  fetchInvestData: [],
  fetchIssuersData: [],
  error: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_INVEST:
      state.error = null;
      return;
    case FETCH_INVEST_SUCCESS:
      state.fetchInvestData = payload;
      return;
    case FETCH_INVEST_FAILURE:
      state.error = error;
      return;

    //fetchIssuers data
    case FETCH_ISSUERS:
      state.error = null;
      return;
    case FETCH_ISSUERS_SUCCESS:
      state.fetchIssuersData = payload;
      return;
    case FETCH_ISSUERS_FAILURE:
      state.error = error;
      return;
    default:
      return state;
  }
});
export default reducer;

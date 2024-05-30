import { produce } from "immer";
import {
  FETCH_PORTFOLIO,
  FETCH_PORTFOLIO_FAILURE,
  FETCH_PORTFOLIO_SUCCESS,
} from "../types/portfolio";

const initialState = {
  portfolioData: null,
  error: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_PORTFOLIO:
      state.error = null;
      return;
    case FETCH_PORTFOLIO_SUCCESS:
      console.warn("reducer", payload)
      state.portfolioData = payload;
      return;
    case FETCH_PORTFOLIO_FAILURE:
      state.error = error;
      return;

    default:
      return state;
  }
});
export default reducer;

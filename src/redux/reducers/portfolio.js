import { produce } from "immer";
import {
  FETCH_INVESTMENT_DETAILS,
  FETCH_INVESTMENT_DETAILS_FAILURE,
  FETCH_INVESTMENT_DETAILS_SUCCESS,
  FETCH_PASSBOOK,
  FETCH_PASSBOOK_FAILURE,
  FETCH_PASSBOOK_SUCCESS,
  FETCH_PORTFOLIO,
  FETCH_PORTFOLIO_FAILURE,
  FETCH_PORTFOLIO_SUCCESS,
} from "../types/portfolio";

const initialState = {
  portfolioData: null,
  error: null,
  passbookData: null,
  passbookError: null,
  investmentDetailData:null,
  investmentDetailError:null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_PORTFOLIO:
      state.error = null;
      return;
    case FETCH_PORTFOLIO_SUCCESS:
      state.portfolioData = payload;
      return;
    case FETCH_PORTFOLIO_FAILURE:
      state.error = error;
      return;

      case FETCH_PASSBOOK:
      state.passbookError = null;
      return;
    case FETCH_PASSBOOK_SUCCESS:
      state.passbookData = payload;
      return;
    case FETCH_PASSBOOK_FAILURE:
      state.passbookError = error;
      return;

      //this is for the investment details
      case FETCH_INVESTMENT_DETAILS:
        state.investmentDetailError = null;
        return;
      case FETCH_INVESTMENT_DETAILS_SUCCESS:
        state.investmentDetailData = payload;
        return;
      case FETCH_INVESTMENT_DETAILS_FAILURE:
        state.investmentDetailError = error;
        return;

    default:
      return state;
  }
});
export default reducer;

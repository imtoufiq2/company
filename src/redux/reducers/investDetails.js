import { produce } from "immer";
import { FETCH_INVEST_DETAILS_CARD, FETCH_INVEST_DETAILS_CARD_FAILURE, FETCH_INVEST_DETAILS_CARD_SUCCESS, FETCH_TABLEDATA, FETCH_TABLEDATA_FAILURE, FETCH_TABLEDATA_SUCCESS } from "../types/investDetails";

const initialState = {
  apiResponse:null,
  error: null,
  tableResponse:null,
  tableError:null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case FETCH_INVEST_DETAILS_CARD:
    state.error = null;
    return;
  case FETCH_INVEST_DETAILS_CARD_SUCCESS:
    state.apiResponse = payload?.[0];
    return;
  case FETCH_INVEST_DETAILS_CARD_FAILURE:
    state.error = error;
    return;


    case FETCH_TABLEDATA:
      state.tableError = null;
      return;
    // case FETCH_INVEST_DETAILS_CARD_SUCCESS:
    //   state.apiResponse = payload?.[0];
    //   return;
    // case FETCH_INVEST_DETAILS_CARD_FAILURE:
    //   state.error = error;
    //   return;


    // case FETCH_TABLEDATA:
    //   state.tableError = null;
    //   return;
    // case FETCH_TABLEDATA_SUCCESS:
    //   // state.tableResponse = payload?.[0];
    //   return;
    // case FETCH_TABLEDATA_FAILURE:
    //   state.error = error;
    //   return;







  default:
    return state;
  }
});

export default reducer;

import { produce } from "immer";
import { FETCH_INVEST_DETAILS_CARD, FETCH_INVEST_DETAILS_CARD_FAILURE, FETCH_INVEST_DETAILS_CARD_SUCCESS, FETCH_SELECT_DATA, FETCH_SELECT_DATA_FAILURE, FETCH_SELECT_DATA_SUCCESS, FETCH_TABLEDATA, FETCH_TABLEDATA_FAILURE, FETCH_TABLEDATA_SUCCESS } from "../types/investDetails";

const initialState = {
  cardApiResponse:[],
  cardApiResponseError: null,
  tableApiResponse:[],
  tableApiError:null,
  selectApiResponse:[],
  selectApiResponseError: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case FETCH_INVEST_DETAILS_CARD:
    state.cardApiResponseError = null;
    return;
  case FETCH_INVEST_DETAILS_CARD_SUCCESS:
    console.warn("this isddddddd",payload )
    state.cardApiResponse = payload;
    state.cardApiResponseError = null;
    return;
  case FETCH_INVEST_DETAILS_CARD_FAILURE:
    state.cardApiResponseError = error;
    return;

// =============== this is for the table =============
    case FETCH_TABLEDATA:
      state.tableApiError = null;
      return;
    case FETCH_TABLEDATA_SUCCESS:
      console.log("htis is testing ", payload)
      state.tableApiResponse = payload;
      state.tableApiError = null;
      return;
    case FETCH_TABLEDATA_FAILURE:
      state.tableApiError = error;
      return;
// =========== select api response ============
// selectApiResponse:[],
// selectApiResponseError: null,

case FETCH_SELECT_DATA:
  state.selectApiResponseError = null;
  return;
case FETCH_SELECT_DATA_SUCCESS:
  state.selectApiResponse = payload;
  state.selectApiResponseError = null;
  return;
case FETCH_SELECT_DATA_FAILURE:
  state.selectApiResponseError = error;
  return;


  default:
    return state;
  }
});

export default reducer;

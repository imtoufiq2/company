import { produce } from "immer";
import { FETCH_INVEST_DETAILS_CARD, FETCH_INVEST_DETAILS_CARD_FAILURE, FETCH_INVEST_DETAILS_CARD_SUCCESS, FETCH_SELECT_DATA, FETCH_SELECT_DATA_FAILURE, FETCH_SELECT_DATA_SUCCESS, FETCH_SPECIAL_OFFER, FETCH_SPECIAL_OFFER_FAILURE, FETCH_SPECIAL_OFFER_SUCCESS, FETCH_TABLEDATA, FETCH_TABLEDATA_FAILURE, FETCH_TABLEDATA_SUCCESS } from "../types/investDetails";

const initialState = {
  cardApiResponse:[],
  cardApiResponseError: null,
  tableApiResponse:[],
  tableApiError:null,
  selectApiResponse:[],
  selectApiResponseError: null,
  specialOfferData:null,
  specialOfferError:null
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
  case FETCH_INVEST_DETAILS_CARD:
    state.cardApiResponseError = null;
    return;
  case FETCH_INVEST_DETAILS_CARD_SUCCESS:
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
      state.tableApiResponse = payload;
      state.tableApiError = null;
      return;
    case FETCH_TABLEDATA_FAILURE:
      state.tableApiError = error;
      return;
// =========== select api response ============
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
// =========== for the special offer =========
case FETCH_SPECIAL_OFFER:
  state.specialOfferError = null;
  return;
case FETCH_SPECIAL_OFFER_SUCCESS:
  state.specialOfferData = payload;
  state.specialOfferError = null;
  return;
case FETCH_SPECIAL_OFFER_FAILURE:
  state.specialOfferError = error;
  return;

  default:
    return state;
  }
});

export default reducer;

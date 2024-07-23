import {
  FETCH_INVEST_DETAILS_CARD,
  FETCH_INVEST_DETAILS_CARD_FAILURE,
  FETCH_INVEST_DETAILS_CARD_SUCCESS,
  FETCH_SELECT_DATA,
  FETCH_SELECT_DATA_FAILURE,
  FETCH_SELECT_DATA_SUCCESS,
  FETCH_SPECIAL_OFFER,
  FETCH_SPECIAL_OFFER_FAILURE,
  FETCH_SPECIAL_OFFER_SUCCESS,
  FETCH_TABLEDATA,
  FETCH_TABLEDATA_FAILURE,
  FETCH_TABLEDATA_SUCCESS,
} from "../types/investDetails";

export const fetchInvestDetails = (payload) => ({
  type: FETCH_INVEST_DETAILS_CARD,
  payload,
});

export const fetchInvestDetailsSuccess = (payload) => ({
  type: FETCH_INVEST_DETAILS_CARD_SUCCESS,
  payload,
});

export const fetchInvestDetailsFailure = (error) => ({
  type: FETCH_INVEST_DETAILS_CARD_FAILURE,
  error,
});

// for the table data
export const fetchTableData = (payload) => ({
  type: FETCH_TABLEDATA,
  payload,
});

export const fetchTableDataSuccess = (payload) => ({
  type: FETCH_TABLEDATA_SUCCESS,
  payload,
});

export const fetchTableDataFailure = (error) => ({
  type: FETCH_TABLEDATA_FAILURE,
  error,
});

// for the fetchSelectData
export const fetchSelectData = (payload) => ({
  type: FETCH_SELECT_DATA,
  payload,
});

export const fetchSelectDataSuccess = (payload) => ({
  type: FETCH_SELECT_DATA_SUCCESS,
  payload,
});

export const fetchSelectDataFailure = (error) => ({
  type: FETCH_SELECT_DATA_FAILURE,
  error,
});

// for the special offer
export const fetchSpecialOffer = (payload) => ({
  type: FETCH_SPECIAL_OFFER,
  payload,
});

export const fetchSpecialOfferSuccess = (payload) => ({
  type: FETCH_SPECIAL_OFFER_SUCCESS,
  payload,
});

export const fetchSpecialOfferFailure = (error) => ({
  type: FETCH_SPECIAL_OFFER_FAILURE,
  error,
});

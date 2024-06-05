import { FETCH_INVEST_DETAILS_CARD, FETCH_INVEST_DETAILS_CARD_FAILURE, FETCH_INVEST_DETAILS_CARD_SUCCESS, FETCH_TABLEDATA, FETCH_TABLEDATA_FAILURE, FETCH_TABLEDATA_SUCCESS } from "../types/investDetails";

export function fetchInvestDetails(payload) {
  return {
    type: FETCH_INVEST_DETAILS_CARD,
    payload: payload,
  };
}
export function fetchInvestDetailsSuccess(payload) {
  return {
    type: FETCH_INVEST_DETAILS_CARD_SUCCESS,
    payload: payload,
  };
}

export function fetchInvestDetailsFailure(error) {
  return {
    type: FETCH_INVEST_DETAILS_CARD_FAILURE,
    error,
  };
}

// for the table data
export function fetchTableData(payload) {
 
  return {
    type: FETCH_TABLEDATA,
    payload: payload,
  };
}
export function fetchTableDataSuccess(payload) {
  console.log("checkpoints", payload)
  return {
    // type: FETCH_TABLEDATA_SUCCESS,
    payload: payload,
  };
}

export function fetchTableDataFailure(error) {
  return {
    type: FETCH_TABLEDATA_FAILURE,
    error,
  };
}

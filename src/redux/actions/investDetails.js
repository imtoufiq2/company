import { FETCH_INVEST_DETAILS_CARD, FETCH_INVEST_DETAILS_CARD_FAILURE, FETCH_INVEST_DETAILS_CARD_SUCCESS,  FETCH_SELECT_DATA,  FETCH_SELECT_DATA_FAILURE,  FETCH_SELECT_DATA_SUCCESS,  FETCH_TABLEDATA, FETCH_TABLEDATA_FAILURE, FETCH_TABLEDATA_SUCCESS } from "../types/investDetails";

export function fetchInvestDetails(payload) {

  return {
    type: FETCH_INVEST_DETAILS_CARD,
    payload: payload,
  };
}
export function fetchInvestDetailsSuccess(payload) {
  // console.warn("it iss" , payload)
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
  
  return {
    type: FETCH_TABLEDATA_SUCCESS,
    payload: payload,
  };
}

export function fetchTableDataFailure(error) {
  return {
    type: FETCH_TABLEDATA_FAILURE,
    error,
  };
}





// for the fetchSelectData
export function fetchSelectData(payload) {
 
  return {
    type:FETCH_SELECT_DATA ,
    payload: payload,
  };
}
export function fetchSelectDataSuccess(payload) {
  // console.warn("helloss", payload)
  return {
    type:FETCH_SELECT_DATA_SUCCESS ,
    payload: payload,
  };
}

export function fetchSelectDataFailure(error) {
  return {
    type: FETCH_SELECT_DATA_FAILURE,
    error,
  };
}

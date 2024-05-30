import { FETCH_INVEST, FETCH_INVEST_FAILURE, FETCH_INVEST_SUCCESS, FETCH_ISSUERS, FETCH_ISSUERS_FAILURE, FETCH_ISSUERS_SUCCESS } from "../types/invest";

export const fetchInvest = (payload) => {
    return {
      type: FETCH_INVEST,
      payload,
    }
  };
  export const fetchInvestSuccess = (payload) => {
    return {
      type: FETCH_INVEST_SUCCESS,
    payload,
    }
  };
  
  export const fetchInvestFailure = (error) => {
    return {
      type: FETCH_INVEST_FAILURE,
    error,
    }
  };
  // ========= fetchIssuers ========
  
  export const fetchIssuers = (payload) => {
   
    return {
      type: FETCH_ISSUERS,
      payload,
    }
  };
  export const fetchIssuersSuccess = (payload) => {
    return {
      type: FETCH_ISSUERS_SUCCESS,
    payload,
    }
  };
  
  export const fetchIssuersFailure = (error) => {
    return {
      type: FETCH_ISSUERS_FAILURE,
    error,
    }
  };
  
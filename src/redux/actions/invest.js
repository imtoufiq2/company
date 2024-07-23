import {
  FETCH_COMPARE_RETURN,
  FETCH_COMPARE_RETURN_FAILURE,
  FETCH_COMPARE_RETURN_SUCCESS,
  FETCH_INVEST,
  FETCH_INVEST_FAILURE,
  FETCH_INVEST_SUCCESS,
  FETCH_ISSUERS,
  FETCH_ISSUERS_FAILURE,
  FETCH_ISSUERS_SUCCESS,
} from "../types/invest";

export const fetchInvest = (payload) =>({
  type: FETCH_INVEST,
  payload,
})

export const fetchInvestSuccess = (payload) => ({
  type: FETCH_INVEST_SUCCESS,
  payload,
})

export const fetchInvestFailure = (error) => ({
  type: FETCH_INVEST_FAILURE,
  error,
})
// ========= fetchIssuers ========

export const fetchIssuers = (payload) => ({
  type: FETCH_ISSUERS,
  payload,
})

export const fetchIssuersSuccess = (payload) => ({
  type: FETCH_ISSUERS_SUCCESS,
  payload,
})

export const fetchIssuersFailure = (error) => ({
  type: FETCH_ISSUERS_FAILURE,
  error,
})

//================ this is for the compare and return
export const fetchCompareReturn = (payload) => ({
  type: FETCH_COMPARE_RETURN,
  payload,
});
export const fetchCompareReturnSuccess = (payload) => ({
  type: FETCH_COMPARE_RETURN_SUCCESS,
  payload,
});
export const fetchCompareReturnFailure = (error) => ({
  type: FETCH_COMPARE_RETURN_FAILURE,
  error,
});

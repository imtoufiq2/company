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

export const fetchPortfolio = (payload) => {
  return {
    type: FETCH_PORTFOLIO,
    payload,
  };
};

export const fetchPortfolioSuccess = (payload) => {
  return {
    type: FETCH_PORTFOLIO_SUCCESS,
    payload,
  };
};

export const fetchPortfolioFailure = (error) => {
  return {
    type: FETCH_PORTFOLIO_FAILURE,
    error,
  };
};

// this is for the passbook
export const fetchPassbook = (payload) => {
  return {
    type: FETCH_PASSBOOK,
    payload,
  };
};

export const fetchPassbookSuccess = (payload) => {
  return {
    type: FETCH_PASSBOOK_SUCCESS,
    payload,
  };
};

export const fetchPassbookFailure = (error) => {
  return {
    type: FETCH_PASSBOOK_FAILURE,
    error,
  };
};

//this is for the investment details
export const fetchInvestmentDetails = (payload) => ({
  type: FETCH_INVESTMENT_DETAILS,
  payload,
});

export const fetchInvestmentDetailsSuccess = (payload) => ({
  type: FETCH_INVESTMENT_DETAILS_SUCCESS,
  payload,
});

export const fetchInvestmentDetailsFailure = (error) => ({
  type: FETCH_INVESTMENT_DETAILS_FAILURE,
  error,
});

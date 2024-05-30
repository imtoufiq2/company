import { FETCH_PORTFOLIO, FETCH_PORTFOLIO_FAILURE, FETCH_PORTFOLIO_SUCCESS } from "../types/portfolio";

  
  
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
  
  
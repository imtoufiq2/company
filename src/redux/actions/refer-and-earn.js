import { REFERRAL_STATS, REFERRAL_STATS_FAILURE, REFERRAL_STATS_SUCCESS } from "../types/refer-and-earn";

// this is for the REFERRAL_STATS
export function getReferralStats(payload) {
    return {
      type: REFERRAL_STATS,
      payload: payload,
    };
  }
  
  export function getReferralStatsSuccess(payload) {
    return {
      type: REFERRAL_STATS_SUCCESS,
      payload: payload,
    };
  }
  
  export function getReferralStatsFailure(error) {
    return {
      type: REFERRAL_STATS_FAILURE,
      error,
    };
  }
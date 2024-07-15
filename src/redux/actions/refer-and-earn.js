import {
  REFERRAL_STATS,
  REFERRAL_STATS_FAILURE,
  REFERRAL_STATS_SUCCESS,
} from "../types/refer-and-earn";

// this is for the REFERRAL_STATS
export const getReferralStats = (payload) => ({
  type: REFERRAL_STATS,
  payload,
});

export const getReferralStatsSuccess = (payload) => ({
  type: REFERRAL_STATS_SUCCESS,
  payload,
});

export const getReferralStatsFailure = (error) => ({
  type: REFERRAL_STATS_FAILURE,
  error,
});

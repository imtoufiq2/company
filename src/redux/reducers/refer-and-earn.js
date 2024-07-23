import { produce } from "immer";

import {
  REFERRAL_STATS,
  REFERRAL_STATS_FAILURE,
  REFERRAL_STATS_SUCCESS,
} from "../types/refer-and-earn";

const initialState = {
  referralStatsData: null,
  referralStatsError: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case REFERRAL_STATS:
      state.referralStatsError = null;
      return;
    case REFERRAL_STATS_SUCCESS:
      state.referralStatsData = payload;
      return;
    case REFERRAL_STATS_FAILURE:
      state.referralStatsError = error;
      return;

    default:
      return state;
  }
});
export default reducer;

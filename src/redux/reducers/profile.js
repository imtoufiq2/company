import { produce } from "immer";

import {
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  FETCH_BANK_DETAILS,
  FETCH_BANK_DETAILS_FAILURE,
  FETCH_BANK_DETAILS_SUCCESS,
  FETCH_MAIN_PROFILE_DETAILS,
  FETCH_MAIN_PROFILE_DETAILS_FAILURE,
  FETCH_MAIN_PROFILE_DETAILS_SUCCESS,
  FETCH_PROFILE_DETAILS,
  FETCH_PROFILE_DETAILS_FAILURE,
  FETCH_PROFILE_DETAILS_SUCCESS,
} from "../types/profile";
import { getLocalStorageData } from "../../utils/Crypto";

const initialState = {
  bankAccountDetail: null,
  bankAccountDetailerror: null,

  personalInfoDetail: null,
  personalInfoDetailerror: null,

  mainProfileDetail: null,
  mainProfileDetailError: null,

  deleteUser: null,
  deleteUserError: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_BANK_DETAILS:
      state.bankAccountDetailerror = null;
      return;
    case FETCH_BANK_DETAILS_SUCCESS:
      state.bankAccountDetail = payload;
      return;
    case FETCH_BANK_DETAILS_FAILURE:
      state.bankAccountDetailerror = error;
      return;

    //this is for the personal info
    case FETCH_PROFILE_DETAILS:
      state.personalInfoDetailerror = null;
      return;
    case FETCH_PROFILE_DETAILS_SUCCESS:
      state.personalInfoDetail = payload;
      return;
    case FETCH_PROFILE_DETAILS_FAILURE:
      state.personalInfoDetailerror = error;
      return;

    //this is for the MAIN PROFILE DETAIL
    case FETCH_MAIN_PROFILE_DETAILS:
      state.mainProfileDetailError = null;
      return;

    case FETCH_MAIN_PROFILE_DETAILS_SUCCESS:
      const investorId = getLocalStorageData("uInfo")?.investor_id;
      const profileData = [
        {
          title: "Profile",
          navigate: `/profile/details/${investorId}`,
          url: "/images/UserPlus.svg",
          titleDetails: null,
        },
        {
          title: "Bank Accounts",
          url: "/images/bank-logo.svg",
          navigate: `/profile/bankdetails/${investorId}`,
          titleDetails: {
            accountNumber: `XXXX${payload?.primary_account_no?.toString().slice(-6)}`,
            accountType: "Primary A/C",
            logo: payload?.bank_logo,
          },
        },
        {
          title: "Refer & Earn",
          navigate: "/earn-rewards",
          url: "/images/referAndEarnMick.svg",
          titleDetails: null,
        },
        {
          title: "Help & Support",
          navigate: "/profile/help-support",
          url: "/images/help-and-support.svg",
          titleDetails: null,
        },
      ];

      return {
        ...state,
        mainProfileDetail: { profileData, profileDetails: payload },
      };

    case FETCH_MAIN_PROFILE_DETAILS_FAILURE:
      state.mainProfileDetailError = error;
      return;

    //this is for the DELETING THE User
    case DELETE_USER:
      state.deleteUserError = null;
      return;
    case DELETE_USER_SUCCESS:
      state.deleteUser = payload;
      return;
    case DELETE_USER_FAILURE:
      state.deleteUserError = error;
      return;

    default:
      return state;
  }
});
export default reducer;

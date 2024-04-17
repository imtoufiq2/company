import { SET_LOADING, CLEAR_LOADING } from "../types/loader";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const clearLoading = () => ({
  type: CLEAR_LOADING,
});

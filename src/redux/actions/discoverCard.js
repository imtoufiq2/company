import {
  FETCH_DISCOVER_DATA,
  FETCH_DISCOVER_DATA_FAILURE,
  FETCH_DISCOVER_DATA_SUCCESS,
} from "../types/discoverCard";

export const fetchDiscoverData = (payload) => ({
  type: FETCH_DISCOVER_DATA,
  payload,
});

export const fetchDiscoverDataSuccess = (payload) => ({
  type: FETCH_DISCOVER_DATA_SUCCESS,
  payload,
});

export const fetchDiscoverDataFailure = (error) => ({
  type: FETCH_DISCOVER_DATA_FAILURE,
  error,
});

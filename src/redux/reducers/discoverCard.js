import { produce } from "immer";

import { FETCH_DISCOVER_DATA, FETCH_DISCOVER_DATA_FAILURE, FETCH_DISCOVER_DATA_SUCCESS } from "../types/discoverCard";

const initialState = {
  discoverData: null,
  discoverDatError: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_DISCOVER_DATA:
      state.discoverDatError = null;
      return;
    case FETCH_DISCOVER_DATA_SUCCESS:
      state.discoverData = payload;
      return;
    case FETCH_DISCOVER_DATA_FAILURE:
      state.discoverDatError = error;
      return;

    default:
      return state;
  }
});
export default reducer;

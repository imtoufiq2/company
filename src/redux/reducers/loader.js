import { produce } from "immer";
import { SET_LOADING, CLEAR_LOADING } from "../types/loader";

const initialState = {
  loading: false,
  message: "",
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      state.loading = true;
      state.message = payload && payload.message;
      return state;
    case CLEAR_LOADING:
      state.loading = false;
      state.message = "";
      return state;
    default:
      return state;
  }
});

export default reducer;

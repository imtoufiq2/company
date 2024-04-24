import { produce } from "immer";
import { QR_CODE_GENERATOR } from "../types/qrGen";

const initialState = {
  getQrCodeDetails: [],
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  console.log(
    "In reducers *** type=>",
    type,
    "payload=>",
    payload,
    "action=>",
    action,
    "state=>",
    state,
  );

  switch (type) {
    case QR_CODE_GENERATOR:
      state.getQrCodeDetails = payload;
      return;

    default:
      return state;
  }
});

export default reducer;

import { put, call } from "redux-saga/effects";
import VerifyMobileApi from "../services/verifyMobileApi";
import { setLoading, clearLoading } from "../redux/actions/loader";
import { GET_MOBILE_NUMBER } from "../redux/types/login";

let api = new VerifyMobileApi();

export function* verifyMobileResendOtp({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileResendOtp(payload);
    yield put(clearLoading());
    // replace this part with line 865 to 871 an rename
    resolve && resolve(response);
    console.log("verifyMobileResendOtp response", response);
    // yield put({
    //   type: GET_MOBILE_NUMBER,
    //   payload:response ,
    // });
    // until here
  } catch (e) {
    // responsePayload = { type: "error", message: apiErrorResponse };
    // yield put({ type: RESPONSE_ERROR_SNACK_OPEN, payload: responsePayload });
    console.log("Something went wrong");
  }
}

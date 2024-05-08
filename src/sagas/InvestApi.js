import { put, call } from "redux-saga/effects";
import investFdDetails from "../services/InvestApi";
import { setLoading, clearLoading } from "../redux/actions/loader";

let api = new investFdDetails();

export function* getInvestFdDetails({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.investFdDetails(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("getInvestFdDetails response", response);
    // yield put({
    //   type: VERIFY_MOBILE_RESEND_OTP,
    //   payload: response,
    // });
    // until here
  } catch (e) {
    // responsePayload = { type: "error", message: apiErrorResponse };
    // yield put({ type: RESPONSE_ERROR_SNACK_OPEN, payload: responsePayload });
    console.log("Something went wrong");
  }
}

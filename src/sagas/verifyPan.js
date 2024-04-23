

import { put, call } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
// import LoginApi from "../services/loginApi"
import VerifyPan from "../services/kycApi"
// let api = new VerifyMobileApi();
let api = new VerifyPan();
// REQUEST_OTP_FOR_MOBILE
export function*  verifyPan({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyPan(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("verifyPan response", response);
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


export function*  savePan({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.savePan(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("savePan response", response);
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


export function*  verifyLater({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyLater(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("verifyLater response", response);
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
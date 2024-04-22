import { put, call } from "redux-saga/effects";
import VerifyMobileApi from "../services/verifyMobileApi";
import { setLoading, clearLoading } from "../redux/actions/loader";
import { VERIFY_MOBILE_RESEND_OTP } from "../redux/types/verifyMobile";

let api = new VerifyMobileApi();

export function* verifyMobileResendOtp({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileResendOtp(payload);
    yield put(clearLoading());
    // console.log("checkType", type);
    console.log("verifyMobileResendOtp response", response);
    responsePayload.verifyMobileResendOtp = response.data;
    resolve && resolve(response);
    // yield put({
    // type: VERIFY_MOBILE_RESEND_OTP,
    //   payload: responsePayload.verifyMobileResendOtp,
    // });
    if (response.data) {
      resolve && resolve(response.data);
    }
    // until here
  } catch (e) {
    yield put(clearLoading());
    // responsePayload = { type: "error", message: apiErrorResponse };
    // yield put({ type: RESPONSE_ERROR_SNACK_OPEN, payload: responsePayload });
    console.log("Something went wrong");
  }
}

import { put, call } from "redux-saga/effects";
import VerifyMobileApi from "../services/verifyMobileApi";
import { setLoading, clearLoading } from "../redux/actions/loader";
import { verifyMobileWithOtpFailure, verifyMobileWithOtpSuccess,verifyMobileResendOtpSuccess ,verifyMobileResendOtpFailure} from "../redux/actions/verifyMobile";

let api = new VerifyMobileApi();



export function* verifyMobileWithOtp({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileWithOtp(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(verifyMobileWithOtpSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(verifyMobileWithOtpFailure(e?.message));
  }
}

export function* verifyMobileResendOtp({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileResendOtp(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    console.warn("hello", response)
    yield put(verifyMobileResendOtpSuccess(response?.data));
   
    // yield put({
    //   type: VERIFY_MOBILE_RESEND_OTP,
    //   payload: response,
    // });
    // until here
  } catch (e) {
    console.log("Something went wrong");
    yield put(verifyMobileResendOtpFailure(e?.message));
  }
}
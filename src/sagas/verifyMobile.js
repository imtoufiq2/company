import { put, call } from "redux-saga/effects";
import VerifyMobileApi from "../services/verifyMobileApi";
import { setLoading, clearLoading } from "../redux/actions/loader";
import {
  verifyMobileWithOtpFailure,
  verifyMobileWithOtpSuccess,
  verifyMobileResendOtpSuccess,
  verifyMobileResendOtpFailure,
} from "../redux/actions/verifyMobile";

let api = new VerifyMobileApi();

export function* verifyMobileWithOtp({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileWithOtp(payload);
    yield put(verifyMobileWithOtpSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      verifyMobileWithOtpFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* verifyMobileResendOtp({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.verifyMobileResendOtp(payload);
    yield put(verifyMobileResendOtpSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      verifyMobileResendOtpFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import LoginApi from "../services/loginApi";
import {
  requestOtpForMobileFailure,
  requestOtpForMobileSuccess,
} from "../redux/actions/login";
let api = new LoginApi();

export function* requestOtpForMobile({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.requestOtpForMobile(payload);
    yield put(requestOtpForMobileSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      requestOtpForMobileFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

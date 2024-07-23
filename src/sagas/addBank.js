import { put, call } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import BankApi from "../services/addBankApi"

let api = new BankApi();

export function*  getIfsc({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.getIfsc(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    console.log("getIfsc response", response);
  } catch (e) {
    console.log("Something went wrong");
  }
}

export function*  verifyBank({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.verifyBank(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("verifyBank response", response);
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
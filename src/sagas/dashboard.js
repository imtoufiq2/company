import { put, call } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
// import BankApi from "../services/addBankApi"
import dashboardApi from "../services/dashboard"

let api = new dashboardApi();
// REQUEST_OTP_FOR_MOBILE
export function*  fetchBanner({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.fetchBanner(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("fetchBanner response", response);
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

// export function*  verifyBank({ type, payload, resolve, reject }) {
//   let responsePayload = {};
//   try {
//     yield put(setLoading());
//     let response = yield api.verifyBank(payload);
//     yield put(clearLoading());
//     resolve && resolve(response);
//     // console.log("checkType", type);
//     console.log("verifyBank response", response);
//     // yield put({
//     //   type: VERIFY_MOBILE_RESEND_OTP,
//     //   payload: response,
//     // });
//     // until here
//   } catch (e) {
//     // responsePayload = { type: "error", message: apiErrorResponse };
//     // yield put({ type: RESPONSE_ERROR_SNACK_OPEN, payload: responsePayload });
//     console.log("Something went wrong");
//   }
// }
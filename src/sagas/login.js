// import { put, call } from "redux-saga/effects";
// import VerifyMobileApi from "../services/verifyMobileApi";
// import { setLoading, clearLoading } from "../redux/actions/loader";


// let api = new VerifyMobileApi();

// export function* verifyMobileResendOtp({ type, payload, resolve, reject }) {
//   let responsePayload = {};
//   try {
//     yield put(setLoading());
//     let response = yield api.verifyMobileResendOtp(payload);
//     yield put(clearLoading());
//     resolve && resolve(response);
//     // console.log("checkType", type);
//     console.log("verifyMobileResendOtp response", response);
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





import { put, call } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import LoginApi from "../services/loginApi"

// let api = new VerifyMobileApi();
let api = new LoginApi();
// REQUEST_OTP_FOR_MOBILE
export function*  requestOtpForMobile({ type, payload, resolve, reject }) {
  let responsePayload = {};
  try {
    yield put(setLoading());
    let response = yield api.requestOtpForMobile(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("requestOtpForMobile response", response);
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
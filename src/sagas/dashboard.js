import { put, call } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
// import BankApi from "../services/addBankApi"
import dashboardApi from "../services/dashboard"

let api = new dashboardApi();
// REQUEST_OTP_FOR_MOBILE
export function*  fetchBanner({ type, payload, resolve, reject }) {
  let responsePayload = {};
  console.log("fetching the banner", )
  try {
    yield put(setLoading());
    let response = yield api.fetchBanner(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("fetchBanner response", response?.data[0]);
    yield put({type:"FETCH_BANNER", payload:response?.data[0]})
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


export function*  showCaseData({ type, payload, resolve, reject }) {
  let responsePayload = {};
  console.log("fetching the showCaseData", )
  try {
    yield put(setLoading());
    let response = yield api.showCaseData(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    // console.log("checkType", type);
    console.log("fetchBanner showCaseData", response?.data);
    
    yield put({type:"FETCH_BANNER", payload:response})
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


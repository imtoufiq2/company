import { all, takeLatest } from "redux-saga/effects";
import { VERIFY_MOBILE_RESEND_OTP } from "../redux/types/verifyMobile";
import { verifyMobileResendOtp } from "./verifyMobile";

function* rootSaga() {
  yield all([takeLatest(VERIFY_MOBILE_RESEND_OTP, verifyMobileResendOtp)]);
}
export default rootSaga;

//saga import
import { all, takeLatest } from "redux-saga/effects";

// types import
import { VERIFY_MOBILE_RESEND_OTP, VERIFY_MOBILE_WITH_OTP } from "../redux/types/verifyMobile";
import {REQUEST_OTP_FOR_MOBILE } from "../redux/types/login";
import { SAVE_PAN ,VERIFY_LATER,VERIFY_PAN } from "../redux/types/kyc";
import { GET_IFSC } from "../redux/types/addBank";

//generator function import
import { verifyMobileResendOtp ,verifyMobileWithOtp} from "./verifyMobile";
import { requestOtpForMobile } from "./login";
import { savePan, verifyLater, verifyPan } from "./verifyPan";
import { getIfsc } from "./addBank";


function* rootSaga() {
  // yield all([takeLatest(VERIFY_MOBILE_RESEND_OTP, verifyMobileResendOtp)]);
  yield all([
    takeLatest(VERIFY_MOBILE_RESEND_OTP, verifyMobileResendOtp),
    takeLatest(VERIFY_MOBILE_WITH_OTP, verifyMobileWithOtp),
    takeLatest(REQUEST_OTP_FOR_MOBILE, requestOtpForMobile),
    takeLatest(SAVE_PAN, savePan),
    takeLatest(VERIFY_PAN, verifyPan),
    takeLatest(VERIFY_LATER, verifyLater),
    takeLatest(GET_IFSC, getIfsc),
  ]);
  
}
export default rootSaga;

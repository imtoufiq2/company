//saga import
import { all, takeLatest } from "redux-saga/effects";

// types import
import {
  VERIFY_MOBILE_RESEND_OTP,
  VERIFY_MOBILE_WITH_OTP,
} from "../redux/types/verifyMobile";
import { REQUEST_OTP_FOR_MOBILE } from "../redux/types/login";
import { SAVE_PAN, VERIFY_LATER, VERIFY_PAN } from "../redux/types/kyc";
import { GET_IFSC, VERIFY_BANK } from "../redux/types/addBank";
import { QR_CODE_GENERATOR } from "../redux/types/qrGen";
import { INVEST_FD_DETAILS } from "../redux/types/invest";

//generator function import
import { verifyMobileResendOtp, verifyMobileWithOtp } from "./verifyMobile";
import { requestOtpForMobile } from "./login";
import { savePan, verifyLater, verifyPan } from "./verifyPan";
import { getIfsc, verifyBank } from "./addBank";
import { qrCodeGenerator } from "./qrGenerator";
import { getInvestFdDetails } from "./InvestApi";

function* rootSaga() {
  // yield all([takeLatest(VERIFY_MOBILE_RESEND_OTP, verifyMobileResendOtp)]);
  yield all([
    takeLatest(VERIFY_MOBILE_RESEND_OTP, verifyMobileResendOtp),
    takeLatest(VERIFY_MOBILE_WITH_OTP, verifyMobileWithOtp),
    takeLatest(REQUEST_OTP_FOR_MOBILE, requestOtpForMobile),
    takeLatest(SAVE_PAN, savePan),
    takeLatest(VERIFY_PAN, verifyPan),
    takeLatest(VERIFY_LATER, verifyLater),
    takeLatest(VERIFY_LATER, verifyLater),
    takeLatest(QR_CODE_GENERATOR, qrCodeGenerator),
    takeLatest(GET_IFSC, getIfsc),
    takeLatest(VERIFY_BANK, verifyBank),
    takeLatest(INVEST_FD_DETAILS, getInvestFdDetails),
  ]);
}
export default rootSaga;

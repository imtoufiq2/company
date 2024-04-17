import { all, takeLatest } from "redux-saga/effects";
import { GET_MOBILE_NUMBER } from "../redux/types/login";
import { verifyMobileResendOtp } from "./verifyMobile";

function* rootSaga() {
  yield all([takeLatest(GET_MOBILE_NUMBER, verifyMobileResendOtp)]);
}
export default rootSaga;

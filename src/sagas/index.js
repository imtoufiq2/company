//saga import
import { all, takeLatest } from "redux-saga/effects";

// types import
import { VERIFY_MOBILE_RESEND_OTP, VERIFY_MOBILE_WITH_OTP } from "../redux/types/verifyMobile";
import {REQUEST_OTP_FOR_MOBILE } from "../redux/types/login";
import { SAVE_PAN ,VERIFY_LATER,VERIFY_PAN } from "../redux/types/kyc";
import { GET_IFSC, VERIFY_BANK } from "../redux/types/addBank";
import { QR_CODE_GENERATOR } from "../redux/types/qrGen";
import { FETCH_BANNER, FETCH_SHOWCASE } from "../redux/types/dashboard";
import { FETCH_INVEST, FETCH_ISSUERS } from "../redux/types/invest";

//generator function import
import { verifyMobileResendOtp ,verifyMobileWithOtp} from "./verifyMobile";
import { requestOtpForMobile } from "./login";
import { savePan, verifyLater, verifyPan } from "./verifyPan";
import { getIfsc, verifyBank } from "./addBank";
import { qrCodeGenerator } from "./qrGenerator";
import { fetchBanner, showCaseData } from "./dashboard";
import { fetchInvest, fetchIssuers } from "./invest";
import { fetchPortfolio } from "./portfolio";
import { fetchInvestDetails, fetchSelectData, fetchTableData } from "./fetchInvestDetails";
import { FETCH_PORTFOLIO } from "../redux/types/portfolio";
import { FETCH_INVEST_DETAILS_CARD, FETCH_SELECT_DATA, FETCH_TABLEDATA } from "../redux/types/investDetails";
import { GET_ANNUAL_INCOME_INFO, GET_DECLARATION_INFO, GET_OCCUPATION_INFO, GET_PERSONAL_INFO, GET_PROFESSIONAL_INFO, GET_SOURCE_OF_INCOME_INFO, UPDATE_DECLARATION_INFO, UPDATE_PERSONAL_INFO, UPDATE_PROFESSIONAL_INFO } from "../redux/types/selfDeclaration";
import { getAnualIncomeInfo, getDeclarationInfo, getOccupationlInfo, getPersonalInfo, getProfessionalInfo, getSourceOfIncomeInfo, updateDeclarationInfo, updatePersonalInfo, updateProfessionalInfo } from "./selfDeclaration";




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
    takeLatest(FETCH_BANNER, fetchBanner),
    takeLatest(FETCH_SHOWCASE, showCaseData),
    takeLatest(FETCH_INVEST, fetchInvest),
    takeLatest(FETCH_ISSUERS, fetchIssuers),
    takeLatest(FETCH_PORTFOLIO, fetchPortfolio),
//for the invest detials
    takeLatest(FETCH_INVEST_DETAILS_CARD, fetchInvestDetails),
    takeLatest(FETCH_TABLEDATA, fetchTableData),
    takeLatest(FETCH_SELECT_DATA, fetchSelectData),
    // profile : self declaration
    takeLatest(GET_PERSONAL_INFO, getPersonalInfo),
    takeLatest(UPDATE_PERSONAL_INFO, updatePersonalInfo),

    // this is for the professional
    takeLatest(GET_PROFESSIONAL_INFO, getProfessionalInfo),
    takeLatest(GET_OCCUPATION_INFO, getOccupationlInfo),
    takeLatest(GET_ANNUAL_INCOME_INFO, getAnualIncomeInfo),
    takeLatest(GET_SOURCE_OF_INCOME_INFO, getSourceOfIncomeInfo),
    takeLatest(UPDATE_PROFESSIONAL_INFO, updateProfessionalInfo),

    // this is for the declaration
    takeLatest(GET_DECLARATION_INFO, getDeclarationInfo),
    takeLatest(UPDATE_DECLARATION_INFO, updateDeclarationInfo),
  ]);
}
export default rootSaga;

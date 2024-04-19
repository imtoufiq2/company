import { combineReducers } from "redux";
import LoginReducer from "./login";
import Loader from "./loader";
import resendOtp from "./verifyMobile";
import BankReducer from "../slice/allBankSlice";

const rootReducer = combineReducers({
  loginPage: LoginReducer,
  BankPage: BankReducer,
  ApplicationLoader: Loader,
  // VerifyMobileResendOtp: resendOtp,
});

export default rootReducer;

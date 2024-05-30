import { combineReducers } from "redux";
import LoginReducer from "./login";
import VerifyMobileReducer from "./verifyMobile"
import dashBoard from "./dashboard"
import investPage from "./invest"
import portfolioPage from "./portfolio"
import Loader from "./loader";
import resendOtp from "./verifyMobile";
// import BankReducer from "../slice/allBankSlice";

const rootReducer = combineReducers({
  loginPage: LoginReducer,
  verifyMobile: VerifyMobileReducer,
  dashBoardPage: dashBoard,
  investPage: investPage,
  portfolioPage: portfolioPage,
  // BankPage: BankReducer,
  ApplicationLoader: Loader,
  // VerifyMobileResendOtp: resendOtp,
});

export default rootReducer;

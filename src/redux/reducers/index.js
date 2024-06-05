import { combineReducers } from "redux";
import LoginReducer from "./login";
import VerifyMobileReducer from "./verifyMobile"
import dashBoard from "./dashboard"
import investPage from "./invest"
import portfolioPage from "./portfolio"
import Loader from "./loader";

// import BankReducer from "../slice/allBankSlice";
import investDetailsReducer from "./investDetails"

const rootReducer = combineReducers({
  loginPage: LoginReducer,
  verifyMobile: VerifyMobileReducer,
  dashBoardPage: dashBoard,
  investPage: investPage,
  portfolioPage: portfolioPage,
  investDetails: investDetailsReducer,
  // BankPage: BankReducer,
  ApplicationLoader: Loader,
  // VerifyMobileResendOtp: resendOtp,
});

export default rootReducer;

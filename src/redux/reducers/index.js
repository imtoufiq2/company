import { combineReducers } from "redux";
import LoginReducer from "./login";
import VerifyMobileReducer from "./verifyMobile"
import dashBoard from "./dashboard"
import profileReducer from "./profile"
import investPage from "./invest"
import portfolioPage from "./portfolio"
import Loader from "./loader";

// import BankReducer from "../slice/allBankSlice";
import investDetailsReducer from "./investDetails"

import selfDeclarationReducer from "./selfDeclaration"
import discoverFdReducer from "./discoverCard"


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

  //this is for the profile, self declaration
  selfDeclaration: selfDeclarationReducer,

  //this is for the DicoverFd
  discoverFd: discoverFdReducer,

  //profile
  profile: profileReducer
});

export default rootReducer;

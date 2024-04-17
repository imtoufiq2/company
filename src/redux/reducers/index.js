import { combineReducers } from "redux";
import LoginReducer from "./login";
import Loader from "./loader";
import BankReducer from "../slice/allBankSlice";

const rootReducer = combineReducers({
  loginPage: LoginReducer,
  BankPage: BankReducer,
  ApplicationLoader: Loader,
});

export default rootReducer;

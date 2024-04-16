import { combineReducers } from "redux";
import LoginReducer from "./login";
import BankReducer from "../slice/allBankSlice";

const rootReducer = combineReducers({
  loginPage: LoginReducer,
  BankPage: BankReducer,
});

export default rootReducer;

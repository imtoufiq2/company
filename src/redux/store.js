import { configureStore } from "@reduxjs/toolkit";
// import bankReducer from "./bankSlice";
import allBankSlice from "./slice/allBankSlice";
export const store = configureStore({
  reducer: {
    banks: allBankSlice,
  },
});

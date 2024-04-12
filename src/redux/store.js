import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
// import bankReducer from "./bankSlice";
// import allBankSlice from "./slice/allBankSlice";
// export const store = configureStore({
//   reducer: {
//     banks: allBankSlice,
//   },
// });

const store = configureStore({
  reducer: rootReducer,
});
export { store };

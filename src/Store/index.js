import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import mailSlice from "./mail-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    mail: mailSlice,
  },
});

export default store;

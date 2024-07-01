import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import mailSlice from "./mail-slice";
import sidebarSlice from "./actions/sidebar-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    mail: mailSlice,
    sidebar: sidebarSlice,
  },
});

export default store;

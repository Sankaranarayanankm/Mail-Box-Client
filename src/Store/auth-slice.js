import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    token: "",
    email: "",
  },
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLogin = !!state.token;
    },
    logout(state) {
      state.isLogin = false;
      state.token = "";
      state.email = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

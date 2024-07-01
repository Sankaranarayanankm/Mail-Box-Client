import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMails: [],
    receivedMails: [],
  },
  reducers: {
    sendMailHandler(state, action) {
      state.sendMails.push({
        ...action.payload,
        time: action.payload.time,
      });
    },
    receivedMailHandler(state, action) {
      state.receivedMails.push({
        ...action.payload,
        time: action.payload.time,
      });
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMails: [],
  receivedMails: [],
  userReceivedMails: [],
  userSendMails: [],
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    clearMails(state) {
      state.receivedMails = [];
      state.sendMails = [];
      state.userReceivedMails = [];
      state.userSendMails = [];
    },
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
      if (action.payload.to == action.payload.email) {
        state.userReceivedMails.push(action.payload);
      }
    },
    markMailAsRead(state, action) {
      const readMail = state.userReceivedMails.find(
        (mail) => mail.id == action.payload
      );
      if (readMail) {
        readMail.seen = true;
      }
    },
    deleteMailHandler(state, action) {
      state.receivedMails = state.receivedMails.filter(
        (item) => item.id != action.payload
      );
      state.userReceivedMails = state.userReceivedMails.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;

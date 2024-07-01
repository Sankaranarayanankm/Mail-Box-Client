import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMails: [],
    receivedMails: [],
    userReceivedMails: [],
    userSendMails: [],
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
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;

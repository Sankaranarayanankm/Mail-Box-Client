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
      // console.log(action.payload);
      state.receivedMails.push({
        ...action.payload,
        time: action.payload.time,
      });
      if (action.payload.to == action.payload.email) {
        state.userReceivedMails.push(action.payload);
      }
    },
    markMailAsRead(state, action) {
      // const readMail=state.receivedMails.find(mail=>mail.id==action.payload.id);
      // if(readMail){
      //   readMail.seen=true;
      // }
      const mailIndex = state.receivedMails.findIndex(
        (item) => item.id == action.payload.id
      );
      state.receivedMails[mailIndex].seen = true;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;

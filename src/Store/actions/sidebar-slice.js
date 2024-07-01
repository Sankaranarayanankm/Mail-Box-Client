import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    display: "inbox",
  },
  reducers: {
    displayInbox(state) {
      state.display = "inbox";
    },
    displaySendMails(state) {
      state.display = "sent";
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;

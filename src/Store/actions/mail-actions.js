import { mailActions } from "../mail-slice";

export function handleSendMail(updatedEmail, mail) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/send${updatedEmail}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mail),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      // dispatch(mailActions.sendMailHandler({ id: data.name, ...mail }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function handleReceivedMail(updatedEmail, mail) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/receive${updatedEmail}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mail),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      // dispatch(mailActions.receivedMailHandler({ id: data.name, ...mail }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function handleGetSendMails(updatedEmail) {
  return async (dispatch) => {
    async function getSendMails() {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/send${updatedEmail}.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const mails = await getSendMails();
      for (let val in mails) {
        const data = { id: val, ...mails[val] };
        dispatch(mailActions.sendMailHandler(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

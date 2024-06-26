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
      dispatch(mailActions.sendMailHandler({ id: data.name, ...mail }));
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
      dispatch(mailActions.receivedMailHandler({ id: data.name, ...mail }));
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

export function handleGetReceivedMails(updatedEmail) {
  return async (dispatch) => {
    async function getReceivedMails() {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/receive${updatedEmail}.json`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const mails = await getReceivedMails();
      for (let val in mails) {
        const data = { id: val, ...mails[val] };
        dispatch(mailActions.receivedMailHandler(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// function for reading messages
/*
  ONE IDEA
  note => when we do this the mails will be unorganized or we will have to sort it based on time  
  
  so what i am planning to do is first we are going to delete the current mail
  then we add a new mail 
  */
export function readMessage(updatedEmail, obj, id) {
  return async (dispatch) => {
    async function handleReadMessage() {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/receive${updatedEmail}/${id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const data = await response.json();
      return data;
    }
    try {
      const value = await handleReadMessage();
      console.log(value);
      dispatch(mailActions.markMailAsRead(id));
    } catch (error) {
      console.log(error);
    }
  };
}

// function to delete mail
export function deleteMail(updatedEmail, id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/receive${updatedEmail}/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      dispatch(mailActions.deleteMailHandler(id));
    } catch (error) {
      console.log(error);
    }
  };
}

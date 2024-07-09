import { authActions } from "../auth-slice";

export const login = (details) => {
  return (dispatch) => {
    try {
      const parsedDetails = JSON.stringify(details);
      localStorage.setItem("details", parsedDetails);
      dispatch(authActions.login(details));
    } catch (error) {
      console.log("Failed to save data in local storage");
    }
  };
};

export const loadLocalStorage = () => {
  return (dispatch) => {
    try {
      const data = localStorage.getItem("details");
      if (!!data) {
        const parsedData = JSON.parse(data);
        dispatch(authActions.login(parsedData));
      }
    } catch (error) {
      console.log("nothing in local storage");
    }
  };
};
    
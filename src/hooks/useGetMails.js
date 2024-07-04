import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleGetReceivedMails,
  handleGetSendMails,
} from "../Store/actions/mail-actions";

function useGetMails(updatedEmail) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetSendMails(updatedEmail));
    dispatch(handleGetReceivedMails(updatedEmail));
  }, [dispatch,updatedEmail]);
}

export default useGetMails;

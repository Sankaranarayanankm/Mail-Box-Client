import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadLocalStorage } from "../Store/actions/auth-actions";

function useLocalStorage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalStorage());
  }, [dispatch]);
}

export default useLocalStorage;
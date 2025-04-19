import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as authAction } from "@/reducers/auth";

function UserProvider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authAction.getCurrentUser());
  }, [dispatch]);
  return null;
}

export default UserProvider;

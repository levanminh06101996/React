import authService from "@/services/authService";
import { GET_CURRENT_USER, SET_CURRENT_USER } from "./constants";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const getCurrentUser = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_CURRENT_USER,
    });
    const fetchUser = async () => {
      try {
        const data = await authService.getCurrentUser();
        dispatch(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchUser();
  };
};

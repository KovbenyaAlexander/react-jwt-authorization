import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const registration = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accesToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e);
    }
    dispatch(setLoadingStatus(false));
  };
};

export default registration;

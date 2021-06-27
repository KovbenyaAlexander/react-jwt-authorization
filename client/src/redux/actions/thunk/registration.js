import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const registration = (email, password) => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const response = AuthService.registration(email, password);
      response.then((response) => {
        localStorage.setItem("token", response.data.accesToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
        dispatch(setLoadingStatus(false));
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export default registration;

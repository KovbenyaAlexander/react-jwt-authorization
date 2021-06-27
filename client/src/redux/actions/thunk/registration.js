import AuthService from "../../../services/AuthService";
import { setAuth } from "../actions";

const registration = (email, password) => {
  return (dispatch) => {
    try {
      const response = AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accesToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export default registration;

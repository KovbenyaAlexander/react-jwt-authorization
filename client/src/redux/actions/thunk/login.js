import AuthService from "../../../services/AuthService";
import { setAuth } from "../actions";

const login = (email, password) => {
  return (dispatch) => {
    try {
      const response = AuthService.login(email, password);
      localStorage.setItem("token", response.data.accesToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export default login;

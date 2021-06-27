import AuthService from "../../../services/AuthService";
import { setAuth } from "../actions";

const logout = () => {
  return (dispatch) => {
    try {
      const response = AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setAuth(false));
      dispatch(setUser({}));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export default logout;

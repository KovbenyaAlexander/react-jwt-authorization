import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const logout = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const response = AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setAuth(false));
      dispatch(setUser({}));
      dispatch(setLoadingStatus(false));
    } catch (e) {
      console.log(e);
      dispatch(setLoadingStatus(false));
    }
  };
};

export default logout;

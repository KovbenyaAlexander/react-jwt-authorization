import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accesToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e);
      console.log(e?.response?.data?.message);
    }
    dispatch(setLoadingStatus(false));
  };
};

export default login;

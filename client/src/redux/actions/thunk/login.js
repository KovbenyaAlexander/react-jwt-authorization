import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const login = (email, password) => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const response = AuthService.login(email, password);
      response.then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accesToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
        dispatch(setLoadingStatus(false));
      });
    } catch (e) {
      dispatch(setLoadingStatus(false));
      console.log(e);
      console.log(e?.response?.data?.message);
    }
  };
};

export default login;

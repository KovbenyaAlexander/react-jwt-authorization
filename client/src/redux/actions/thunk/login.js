import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";
import M from "materialize-css";
import validateEmail from "../../../helpers/emailValidation";

const login = (email, password) => {
  return async (dispatch) => {
    const resultOfEmailvalidation = validateEmail(email);
    if (!resultOfEmailvalidation) {
      M.toast({ html: "Invalid email" });
      return;
    }

    if (password.length < 4 || password.length > 30) {
      M.toast({ html: "Too short password" });
      return;
    }

    try {
      dispatch(setLoadingStatus(true));
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accesToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
      M.toast({ html: "login successful" });
    } catch (e) {
      if (e?.response?.data?.message) {
        M.toast({ html: e?.response?.data?.message });
      } else {
        M.toast(`something went wrong`);
      }
    }
    dispatch(setLoadingStatus(false));
  };
};

export default login;

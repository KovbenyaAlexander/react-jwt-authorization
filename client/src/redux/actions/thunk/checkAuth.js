import { setAuth, setUser, setLoadingStatus } from "../actions";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const checkAuth = () => {
  return (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      const response = axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      response.then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
        dispatch(setLoadingStatus(false));
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
};

export default checkAuth;

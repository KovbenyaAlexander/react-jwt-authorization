import { setAuth, setUser } from "../actions";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const checkAuth = () => {
  return (dispatch) => {
    try {
      const response = axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      response.then((response) => {
        localStorage.setItem("token", response.data.accesToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export default checkAuth;

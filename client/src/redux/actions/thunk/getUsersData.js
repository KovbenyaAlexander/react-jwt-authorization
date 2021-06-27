import UserService from "../../../services/UserService";
import { setLoadingStatus, setUsersData } from "../actions";

const getUsersData = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const response = UserService.getUsers();

      response.then((response) => {
        console.log(response.data);
        dispatch(setUsersData(response.data));
        dispatch(setLoadingStatus(false));
      });
    } catch (e) {
      console.log(e);
      dispatch(setLoadingStatus(false));
    }
  };
};

export default getUsersData;

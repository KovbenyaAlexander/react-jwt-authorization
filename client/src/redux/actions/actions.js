import { SET_AUTH, SET_USER, SET_LOADING_STATUS } from "./actionsTypes";

export function setAuth(isAuth) {
  return {
    type: SET_AUTH,
    payload: isAuth,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setLoadingStatus(loadingStatus) {
  return {
    type: SET_LOADING_STATUS,
    payload: loadingStatus,
  };
}

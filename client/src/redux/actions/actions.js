import { SET_AUTH, SET_USER } from "./actionsTypes";

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

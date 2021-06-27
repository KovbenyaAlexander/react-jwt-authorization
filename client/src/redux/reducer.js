import { SET_USER, SET_AUTH } from "./actions/actionsTypes";

const initialState = {
  isAuth: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

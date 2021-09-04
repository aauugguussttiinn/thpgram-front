import { CREATE_USER, LOGIN_USER, LOGOUT_USER, SET_USER_PROFILE, EDIT_USER_PROFILE } from "store/actions/userActions";
import Cookies from "js-cookie";

const userInitialState = {user : ""};
const emptyState = undefined

export default function userReducer(state = userInitialState, action) {

  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        changed: false,
        token: action.payload.jwt,
      };
    case LOGOUT_USER:
      return emptyState;
    case SET_USER_PROFILE:
      return {
        ...state,
        changed: false,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        changed: true,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
      }
    default:
      return state;
  }
};
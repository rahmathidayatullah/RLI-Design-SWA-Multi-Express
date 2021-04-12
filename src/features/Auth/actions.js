// (1) import constant
import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token) {
  return {
    type: USER_LOGIN,
    token,
  }
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  }
}
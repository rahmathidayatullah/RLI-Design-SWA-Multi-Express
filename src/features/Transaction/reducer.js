import {
  START_FETCHING_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  ERROR_FETCHING_TRANSACTION,
  SET_KEYWORD,
  SET_NOTIF
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
  keyword: '',
  notif: {
    id: '',
    message: '',
    type: '',
    status: '',
    toggle: false
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TRANSACTION:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_TRANSACTION:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_TRANSACTION:
      return { ...state, status: statuslist.success, data: action.transaction };

    case SET_KEYWORD:
      return { ...state, keyword: action.keyword }

    case SET_NOTIF:
      return { ...state, notif: action.notif }

    default:
      return state;
  }
}

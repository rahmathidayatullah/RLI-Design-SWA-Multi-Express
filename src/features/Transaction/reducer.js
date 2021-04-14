import {
  START_FETCHING_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  ERROR_FETCHING_TRANSACTION,
  SET_DATE,
  SET_COURIER,
  SET_KEYWORD,
  SET_NOTIF,
  SET_PRICE
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
  couriers: '',
  priceMax: '',
  priceMin: '',
  date: {
    key: "selection",
  },
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

    case SET_COURIER:
      return { ...state, couriers: action.couriers }

    case SET_PRICE:
      return { ...state, priceMin: action.priceMin, priceMax: action.priceMax }

    case SET_DATE:
      return { ...state, date: action.date };

    default:
      return state;
  }
}

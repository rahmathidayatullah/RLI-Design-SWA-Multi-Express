import {
  START_FETCHING_COURIER,
  SUCCESS_FETCHING_COURIER,
  ERROR_FETCHING_COURIER,
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

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_COURIER:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_COURIER:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_COURIER:
      return { ...state, status: statuslist.success, data: action.courier };
    default:
      return state;
  }
}

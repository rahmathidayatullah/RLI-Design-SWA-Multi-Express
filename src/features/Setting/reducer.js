import {
  START_FETCHING_SETTING,
  SUCCESS_FETCHING_SETTING,
  ERROR_FETCHING_SETTING,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: {},
  status: statuslist.idle,
  keyword: '',

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SETTING:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_SETTING:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_SETTING:
      return { ...state, status: statuslist.success, data: action.setting };
    default:
      return state;
  }
}

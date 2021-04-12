import {
  START_FETCHING_SETTING,
  ERROR_FETCHING_SETTING,
  SUCCESS_FETCHING_SETTING,
} from "./constants";

import { getData } from 'utils/fetchData'
import debounce from "debounce-promise";

let debouncedFetchSetting = debounce(getData, 1000);

export const startFetchingSetting = () => {
  return {
    type: START_FETCHING_SETTING,
  };
};

export const errorFetchingSetting = () => {
  return {
    type: ERROR_FETCHING_SETTING,
  };
};

export const successFetchingSetting = ({ setting }) => {
  return {
    type: SUCCESS_FETCHING_SETTING,
    setting
  };
};

export const fetchSetting = () => {
  return async (dispatch, getState) => {
    try {
      let keyword = getState().setting.keyword || '';
      dispatch(startFetchingSetting());
      const params = { search: keyword }
      const res = await debouncedFetchSetting('settings', params);

      dispatch(successFetchingSetting({ setting: res.data.data }));

    } catch (err) {
      dispatch(errorFetchingSetting());
    }
  };
};


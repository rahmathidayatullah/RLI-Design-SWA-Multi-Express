import {
  START_FETCHING_COURIER,
  ERROR_FETCHING_COURIER,
  SUCCESS_FETCHING_COURIER,
} from "./constants";

import { getData } from 'utils/fetchData'
import debounce from "debounce-promise";

let debouncedFetchCourier = debounce(getData, 1000);

export const startFetchingCourier = () => {
  return {
    type: START_FETCHING_COURIER,
  };
};

export const errorFetchingCourier = () => {
  return {
    type: ERROR_FETCHING_COURIER,
  };
};

export const successFetchingCourier = ({ courier }) => {
  return {
    type: SUCCESS_FETCHING_COURIER,
    courier
  };
};

export const fetchCourier = () => {
  return async (dispatch, getState) => {
    try {
      let keyword = getState().courier.keyword || '';
      dispatch(startFetchingCourier());
      const params = { search: keyword }
      const res = await debouncedFetchCourier('couriers', params);

      dispatch(successFetchingCourier({ courier: res.data.data }));

    } catch (err) {
      dispatch(errorFetchingCourier());
    }
  };
};


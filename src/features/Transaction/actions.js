import {
  START_FETCHING_TRANSACTION,
  ERROR_FETCHING_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  SET_KEYWORD,
  SET_COURIER,
  SET_NOTIF
} from "./constants"
import moment from "moment";

import { getData } from 'utils/fetchData'
import debounce from "debounce-promise";

let debouncedFetchTransaction = debounce(getData, 1000);

export const startFetchingTransaction = () => {
  return {
    type: START_FETCHING_TRANSACTION,
  };
};

export const errorFetchingTransaction = () => {
  return {
    type: ERROR_FETCHING_TRANSACTION,
  };
};

export const successFetchingTransaction = ({ transaction }) => {
  return {
    type: SUCCESS_FETCHING_TRANSACTION,
    transaction
  };
};

export const fetchTransaction = () => {
  return async (dispatch, getState) => {
    try {

      const notif = {
        message: '',
        type: '',
        status: '',
        toggle: false
      }

      setTimeout(() => {
        dispatch(setNotif(notif))
      }, 5000)

      let keyword = getState().transaction.keyword || '';
      let start = moment(getState().transaction.date.startDate).format("YYYY-MM-DD") || "";
      let end = moment(getState().transaction.date.endDate).format("YYYY-MM-DD") || "";
      let priceMin = getState().transaction.priceMin || '';
      let priceMax = getState().transaction.priceMax || '';
      let couriers = getState().transaction.couriers || '';

      dispatch(startFetchingTransaction());
      const params = {
        search: keyword,
        start,
        end,
        priceMin,
        priceMax,
        couriers,
      }
      const res = await debouncedFetchTransaction('transactions', params);

      dispatch(successFetchingTransaction({ transaction: res.data.data }));

    } catch (err) {
      dispatch(errorFetchingTransaction());
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

export const setNotif = (notif) => {
  return {
    type: SET_NOTIF,
    notif,
  };
};

export const setCourier = (couriers) => {
  return {
    type: SET_COURIER,
    couriers,
  };
}

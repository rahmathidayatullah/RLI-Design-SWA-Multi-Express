import {
  START_FETCHING_TRANSACTION,
  ERROR_FETCHING_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  SET_KEYWORD,
  SET_NOTIF
} from "./constants";

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
      dispatch(startFetchingTransaction());
      const params = { search: keyword }
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



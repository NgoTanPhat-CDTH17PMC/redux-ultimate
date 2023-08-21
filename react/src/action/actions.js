import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./types";
import axios from "axios";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest()); // truoc khi fetch thi phai dispatch de bao truoc la cbi fetch api
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (e) {
      dispatch(fetchUsersError);
    }
  };
};

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUsers: payload,
  };
};

const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

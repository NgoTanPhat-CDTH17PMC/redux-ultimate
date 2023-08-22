import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
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

/* CREATE USER */

export const createNewUserRedux = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      let res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (e) {
      dispatch(createUsersError());
    }
  };
};

const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

/* DELETE USER */

export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUsersRequest());
    try {
      let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
      if (res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (e) {
      dispatch(deleteUsersError());
    }
  };
};

const deleteUsersRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

const deleteUsersSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

const deleteUsersError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};

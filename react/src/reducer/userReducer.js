import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [], // quy dinh Redux se hold cai bien nay sau khi fetch user
  isLoading: false,
  isError: false,
  isCreating: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state, // copy lai state truoc do
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.dataUsers,
        isLoading: false,
        isError: false,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CREATE_USER_REQUEST:
      return {
        ...state, // copy lai state truoc do
        isCreating: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };

    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };

    case DELETE_USER_REQUEST:
      return {
        ...state, // copy lai state truoc do
        isLoading: true,
        isError: false,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;

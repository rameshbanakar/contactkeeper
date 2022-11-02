import {
  REGISTER_SUCCESS,
  REGISTER_FAILE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return{
        ...state,
        user:action.payload,
        loading:false,
        isAuthenticated:true
      }
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILE:
    case AUTH_ERROR: 
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
        user: null,
      };
    case CLEAR_ERROR:
      return{
        ...state,
        error:null
      }
    default:
      return state
  }
};

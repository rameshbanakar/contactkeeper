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
import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user:null,
    error: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //register success
//   const registerSuccess = (contact) => {
//     //contact.id = uuid.v4();
//     dispatch({ type: ADD_CONTACT, payload: contact });
//   };
  //register fail
  //user loaded
  //auth error
  //login success
  //login fail
  //logout
  //clear error
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user:state.user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;

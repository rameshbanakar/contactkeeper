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
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
   
  //user loaded
  const loadUser = async (token) => {
    //@todo-load token into global headers
    //console.log(localStorage.token)
    if(token){
      setAuthToken(token)
    }
    try {
      const res = await axios.get("/api/auth");
     // console.log(res)
      dispatch({ type: USER_LOADED, payload: res.data });
      //console.log(res)
    } catch (err) {
      //auth error
      dispatch({ type: AUTH_ERROR });
    }
  };
  const register = async formData=> {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      //console.log(formData);
      const res = await axios.post("/api/users", formData, config);
      //console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      });
      loadUser(res.data.token)
      //console.log(res.data.token)
      
    } catch (error) {
      //console.log( error.response.data.msg)
      dispatch({
        //register fail
        
        type: REGISTER_FAILE,
        payload: error.response.data.msg,
      });
    }
  };

  

  //login success
  const login=async(data)=>{
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res=await axios.post("/api/auth",data,config)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      loadUser(res.data.token)
    } catch (error) {
      
      console.log(error.response.data)
      dispatch({
         //login fail
        
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
      
    }
  }
 
  //logout
  const logout=()=>{
    dispatch({type:LOGOUT})
  }
  //clear error
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        clearError,
        register,
        loadUser,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;

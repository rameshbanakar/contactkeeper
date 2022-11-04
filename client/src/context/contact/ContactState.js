import React, { useReducer } from "react";
//import {v4 as uuid} from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import axios from "axios";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  REMOVE_ALERT,
  FILTER_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACT,
  CLEAR_CONTACT
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filter: null,
    error:null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //get contact
  const getContact=async()=>{
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res=await axios.get("/api/contact")
      dispatch({ type: GET_CONTACT, payload: res.data});
      console.log(res)
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
  }
  //add contact
  const addContact =async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //contact.id = uuid.v4();
    try {
      const res=await axios.post("/api/contact",contact,config)
      //console.log(res)
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
      //console.log(error.response.msg)
    }
    
  };
  //clear contact
  const clearContact=()=>{
    dispatch({ type: CLEAR_CONTACT});
  }
  //delete contact
  const deleteContent = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //set current content
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current content
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filter:state.filter,
        error:state.error,
        addContact,
        deleteContent,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        getContact,
        clearContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;

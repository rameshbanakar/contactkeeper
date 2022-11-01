import React, { useReducer } from "react";
//import {v4 as uuid} from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
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
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ramesh",
        phone: "9108911421",
        email: "ramesh@gmail.com",
        type: "personal",
      },
      {
        id: 2,
        name: "Veeresh",
        phone: "9164170604",
        email: "veeresh@gmail.com",
        type: "personal",
      },
      {
        id: 3,
        name: "sahana",
        phone: "910891131",
        email: "sahana@gmail.com",
        type: "professional",
      },
    ],
    current: null,
    filter: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact
  const addContact = (contact) => {
    //contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
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
        addContact,
        deleteContent,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;

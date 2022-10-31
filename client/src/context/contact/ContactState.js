import React, { useReducer } from "react";
import uuid from "uuid";
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
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts:[{
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
    }]
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //add contact
  //delete contact
  //update contact
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;

import React, { useContext, useEffect } from "react";

import Contacts from "../contact/Contact";
import ContactFilter from "../contact/ContactFilter";
import ContactForm from "../contact/ContactForm";
import AuthContext from "../../context/auth/AuthContext";
export const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  },[]);
  return (
    <div className="row">
      <div className="col">
        <ContactForm />
      </div>
      <div className="col">
        <div>
          <ContactFilter />
        </div>
        <Contacts />
      </div>
    </div>
  );
};

import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import { Spinner } from "../layout/Spinner";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter,getContact,loading } = contactContext;
  // if (contacts === "") {
  //   return <h4>Please add Contacts</h4>;
  // }
  useEffect(()=>{
    getContact()
    //elint-disable-next-line
  },[])
  return (
    <div>
       {/* {contacts!==null && !loading?():<Spinner/>} */}
      {contacts.length <= 0 ? (
        <h4>Please add Contacts</h4>
      ) : (
        <Fragment>
         {contacts!==null && !loading?(<TransitionGroup>
          {filter !== null
            ? filter.map((contact) => (
                <CSSTransition key={contact._id} timeout={500}>
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition key={contact._id} timeout={500}>
                  <ContactItem contact={contact} key={contact.id} />
                </CSSTransition>
              ))}
        </TransitionGroup>):<Spinner/>}
        
        </Fragment>
      )}
    </div>
  );
};

export default Contacts;

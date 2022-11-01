import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/ContactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter } = contactContext;
  if (contacts === "") {
    return <h4>Please add Contacts</h4>;
  }
  return (
    <div>
      <TransitionGroup>
        {filter !== null
          ? filter.map((contact) => (
              <CSSTransition key={contact.id}  timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id}  timeout={500}>
                <ContactItem contact={contact} key={contact.id} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Contacts;

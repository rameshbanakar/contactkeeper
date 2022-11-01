import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const text = useRef("");
  const contactContext = useContext(ContactContext);
  const { clearFilter, filter, filterContact } = contactContext;
  const onChange = (e) => {
    if (text.current.value !== null) {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  useEffect(() => {
    if (filter === null) {
      text.current.value = null;
    }
  });
  return (
    <form>
      <input
        type="text"
        ref={text}
        onChange={onChange}
        placeholder="Search...."
        className="m-3"
      />
    </form>
  );
};

export default ContactFilter;

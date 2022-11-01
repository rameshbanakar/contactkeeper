import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    } else {
      updateContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
      clearCurrent();
    }
  };
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>{current ? "Edit Contact" : "Add contact"}</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Enter your name"
        required
      />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Enter your email"
      />
      <br />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Enter your phone Number"
      />
      <h6>Contact Type</h6>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
        defaultChecked
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <br />
      <input
        type="submit"
        value={current ? "Edit Contact" : "Add contact"}
        className="btn btn-primary btn-block"
      />
      {current && (
        <div>
          <button
            type="button"
            className="btn btn-light btn-block"
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

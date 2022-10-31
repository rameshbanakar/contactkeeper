import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const onChange=(e)=>setContact({...contact,[e.target.name]:e.target.value})
  return (
    <form action="/about" method="gett">
      <h3>Add Contact</h3>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Enter your name"/><br/>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter your email"/><br/>
      <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Enter your phone Number"/>
       <h6>Contact Type</h6>
       <input type="radio" name="type" value="personal" checked/>Personal{" "}
       <input type="radio" name="type" value="professional" /> Professional<br/>
    <input type="submit" value="Add contact" className="btn btn-primary"/>

    </form>
  );
};  

export default ContactForm;

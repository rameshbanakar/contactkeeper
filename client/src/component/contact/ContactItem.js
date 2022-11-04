import React,{useContext} from "react";
import PropTypes from "prop-types"
import ContactContext from "../../context/contact/ContactContext";
const ContactItem = ({ contact, key }) => {
  const { _id, name, email, phone, type } = contact;
  const contactContext =useContext(ContactContext)
  const {deleteContent,setCurrent,clearCurrent}=contactContext
  const onDelete=()=>{
    contactContext.deleteContent(_id)
    //clearCurrent()
  }
  return (
    <div className="card bg-light m-3">
      <h3 className="text-primary text-left">{name}</h3>
      <span
        className={
          type === "professional"
            ? "badge rounded-pill text-bg-success"
            : "badge rounded-pill text-bg-primary"
        }
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button type="button" className="btn btn-dark btn-sm m-1" onClick={()=>setCurrent(contact)}>
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm m-1" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
 ContactItem.propTypes={
    contact:PropTypes.object.isRequired
}
export default ContactItem;

import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import { CLEAR_CONTACT } from "../../context/types";
import ContactContext from "../../context/contact/ContactContext";
export const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext=useContext(ContactContext)
  const { user, isAuthenticated, logout } = authContext;
  const {clearContact}=contactContext
  const onLogout=()=>{
    logout()
    clearContact()
  }
  const authLink = (
    <Fragment>
      <li>
        <Link to="/" className="navitems">
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" className="navitems">
          About
        </Link>
      </li>
      <li>
        <a href="/" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLink = (
    <Fragment>
      <li>
        <Link to="/register" className="navitems">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="navitems">
          Login
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-success">
      <i className={icon}>{title}</i>
      <ul className="navdetails">{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};
Navbar.PropsTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "contact keeper",
  icon: "fas fa-id-card-alt",
};

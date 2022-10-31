import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
export const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-success">
      <i className={icon}>{title}</i>
      <ul className="navdetails">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
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

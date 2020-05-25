import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./sidebar.css";

const Sidebar = ({ currentUser }) => {
  return (
    <div
      className="sidebar"
      data-color="purple"
      data-background-color="white"
      data-image="assets/img/sidebar-1.jpg"
    >
      <div className="logo">
        <Link to="/" className="simple-text logo-normal">
          Mock Admin
        </Link>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item ">
            {currentUser ? (
              <Link className="nav-link" to="/user">
                <i className="material-icons">person</i>
                <p>User Profile</p>
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                <i className="material-icons">person</i>
                <p>User Profile</p>
              </Link>
            )}
          </li>
          <li className="nav-item ">
            {currentUser ? (
              <Link className="nav-link" to="/etherscan">
                <i className="material-icons">content_paste</i>
                <p>Etherscan</p>
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                <i className="material-icons">content_paste</i>
                <p>Etherscan</p>
              </Link>
            )}
          </li>
          <li className="nav-item active-pro ">
            {currentUser ? (
              <Link className="signout" to="/" onClick={() => auth.signOut()}>
                <i className="material-icons">unarchive</i>
                Sign Out
              </Link>
            ) : (
              <Link className="nav-link" to="/">
                <i className="material-icons">unarchive</i>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

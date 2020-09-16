import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../images/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import {connect } from 'react-redux';
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link to="/signIn" className="option">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header);

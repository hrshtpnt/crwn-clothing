import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../images/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

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
      </div>
      <div className="options">
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
      <div className="options">
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

export default Header;

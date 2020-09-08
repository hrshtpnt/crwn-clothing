import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../images/crown.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
    </div>
  );
};

export default Header;

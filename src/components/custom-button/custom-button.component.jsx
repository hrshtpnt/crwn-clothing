import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, isSignInWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isSignInWithGoogle ? "googleSignIn" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

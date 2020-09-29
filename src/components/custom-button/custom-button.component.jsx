import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({
  children,
  isSignInWithGoogle,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={` ${isSignInWithGoogle ? "googleSignIn" : ""}
      ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

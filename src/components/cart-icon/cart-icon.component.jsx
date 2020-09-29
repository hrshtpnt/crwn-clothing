import React from "react";
import { ReactComponent as ShoppingIcon } from "../../images/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions.js";
import "./cart-icon.styles.scss";
const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon alt="shopping_icon" className="shopping-icon" />
      <div className="item-count">{0}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);

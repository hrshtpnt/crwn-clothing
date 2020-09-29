import React from "react";
import "./cart-items.styles.scss";

const CartItems = ({ item }) => {
  return (
    <div className="cart-item">
      <img alt="item_image" src={item.imageUrl} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">{item.price + "x $" + item.qty}</span>
      </div>
    </div>
  );
};

export default CartItems;

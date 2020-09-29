import React from "react";
import "./collection-items.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {addItemToCart} from "../../redux/cart/cart-actions";
const CollectionItem = ({item, addItemToCart }) => {
  const {name, price, imageUrl} = item;
return (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <CustomButton
      className="custom-button"
      inverted
      onClick={() => addItemToCart(item)}
    >
      Add to cart
    </CustomButton>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

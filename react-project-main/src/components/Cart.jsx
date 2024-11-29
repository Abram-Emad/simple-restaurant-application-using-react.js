import React from "react";

const Cart = ({ product, onClick }) => {
  const style = !product.isInCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };

  return (
    <>
      <i
        style={style}
        onClick={() => onClick(product)}
        className='fas fa-cart-plus'></i>
    </>
  );
};

export default Cart;

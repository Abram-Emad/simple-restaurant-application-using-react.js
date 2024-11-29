import React from "react";
import Product from "../components/Product";

const ShoppingCart = ({ products, onReset, onDelete, onIncrement }) => {
  return (
    <>
      <h1>Shopping Cart</h1>
      <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
        Reset
      </button>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={onDelete}
          onIncreement={onIncrement}
        />
      ))}
    </>
  );
};

export default ShoppingCart;

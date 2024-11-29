import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, onIncreement, onDelete }) => {
  const getClasses = () => {
    return product.count === 0
      ? "badge text-bg-warning m-2"
      : "badge text-bg-primary m-2";
  };

  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <span>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </span>
        </div>
        <div className='col'>
          <span className={getClasses()}>{product.count}</span>
          <button
            onClick={() => onIncreement(product)}
            className='btn btn-primary btn-sm'>
            +
          </button>
          <span style={{ cursor: "pointer" }} onClick={() => onDelete(product)}>
            <i className='fas fa-trash m-2'></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;

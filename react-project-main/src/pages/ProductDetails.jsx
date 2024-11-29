import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // `id` is a string from useParams

  const handleBack = () => {
    navigate("/cart", { replace: true });
  };

  // Ensure correct comparison of `id` (string) with product.id
  const product = products.find((product) => product.id.toString() === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <h1>Details No. {id}</h1>
      <h2>{product.name}</h2>
      <h2>Count in Shopping Cart: {product.count}</h2>
      <button onClick={handleBack} className="btn btn-primary btn-sm">
        Back
      </button>
    </>
  );
};

export default ProductDetails;

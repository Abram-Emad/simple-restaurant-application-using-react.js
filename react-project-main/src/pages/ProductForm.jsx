import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const [state, setState] = useState({ name: "", price: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (id !== "new") {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/products/${id}`
          );
          setState({ name: data.name, price: data.price });
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = { ...state, count: 0, isInCCart: false };
    try {
      if (id === "new") {
        await axios.post("http://localhost:3000/products/", productData);
      } else {
        await axios.put(`http://localhost:3000/products/${id}`, productData);
      }
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>{id === "new" ? "Add Product" : "Edit Product"}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            onChange={handleChange}
            value={state.name}
            type='text'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            id='price'
            name='price'
            onChange={handleChange}
            value={state.price}
            type='text'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          {id === "new" ? "Add" : "Edit"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;

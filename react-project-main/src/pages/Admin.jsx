import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = ({ products, onDelete }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Admin</h1>
      <button
        onClick={() => navigate("/productform/new")}
        className='btn btn-primary'>
        Add
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <i
                  onClick={() => navigate(`/productform/${product.id}`)}
                  className='fas fa-edit'
                  style={{ cursor: "pointer" }}></i>
              </td>
              <td>
                <i
                  onClick={() => onDelete(product)}
                  className='fas fa-trash'
                  style={{ cursor: "pointer" }}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;

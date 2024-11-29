import React from "react";
import Cart from "../components/Cart";

const Menu = ({ products, onClick }) => {
  return (
    <>
      <h1>Menu</h1>{" "}
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Cart onClick={onClick} product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Menu;

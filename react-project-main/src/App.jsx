// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import AboutLayout from "./layout/AboutLayout";
import AboutHome from "./pages/AboutHome";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import OurRestaurant from "./pages/OurRestaurant";
import OurStaff from "./pages/OurStaff";
import ProductForm from "./pages/ProductForm";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Signup from "./pages/Signup";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products/");
        setProducts(data);
      } catch (error) {
        toast.error("Failed to load products");
      }
    };
    fetchData();
  }, []); 

  const handleDelete = async (product) => {
    const oldProducts = [...products];
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);

    try {
      await axios.delete(`http://localhost:3000/products/${product.id}`);
    } catch (ex) {
      toast.error("Unable to delete product");
      setProducts(oldProducts); 
    }
  };

  const handleReset = () => {
    const resetProducts = products.map((product) => ({ ...product, count: 0 }));
    setProducts(resetProducts);
  };

  const IncrementHandler = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, count: p.count + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleInCartChange = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, isInCart: !p.isInCart } : p
    );
    setProducts(updatedProducts);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            productsCount={products.filter((p) => p.isInCart).length}
          />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="products/:id/:name?"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="productform/:id"
          element={<ProductForm products={products} />}
        />
        <Route
          path="menu"
          element={<Menu products={products} onClick={handleInCartChange} />}
        />
        <Route
          path="cart"
          element={
            <ShoppingCart
              products={products.filter((product) => product.isInCart)}
              onDelete={handleInCartChange}
              onIncrement={IncrementHandler}
              onReset={handleReset}
            />
          }
        />
        <Route
          path="admin"
          element={<Admin products={products} onDelete={handleDelete} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<AboutHome />} />
          <Route path="ourrestaurant" element={<OurRestaurant />} />
          <Route path="ourstaff" element={<OurStaff />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

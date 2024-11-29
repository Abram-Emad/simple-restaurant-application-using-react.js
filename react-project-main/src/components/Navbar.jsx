import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({productsCount}) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        Navbar
      </a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/menu'>
              Menu
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/cart'>
              Shopping Cart
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/about'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/admin'>
              Admin
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/signup'>
              SignUp
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive && "active"}`} to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to='/cart'>
        <span className='badge badge-primary'>
          <i style={{ color: "white" }} className='fas fa-cart-plus'></i>
          {productsCount}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;

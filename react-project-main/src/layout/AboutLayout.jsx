import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <nav>
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "black",
                    })}
                    to='/about/ourrestaurant'>
                    Our Restaurant
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "black",
                    })}
                    to='/about/ourstaff'>
                    Our Staff
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;

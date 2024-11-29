import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          bottom: 0,
          position: "fixed",
          width: "-webkit-fill-available",
        }}
        className='card text-center'>
        <div className='card-footer text-body-secondary'>
          <p>&copy; 2021 Restaurant . All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

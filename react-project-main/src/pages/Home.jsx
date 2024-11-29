import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu", { replace: true });
  };

  return (
    <>
      <main>
        <section id='hero'>
          <h2>Welcome to our restaurant</h2>
          <p>Enjoy our delicious food and drinks in a cozy atmosphere.</p>
          <a onClick={handleClick} className='btn'>
            View Menu
          </a>
        </section>
        <section id='about'>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit
            vel velit tincidunt aliquet. Sed euismod, sapien sit amet ultricies
            malesuada, mauris nisl bibendum velit, vel malesuada ipsum nisl vel
            velit. Nulla facilisi. Sed euismod, sapien sit amet ultricies
            malesuada, mauris nisl bibendum velit, vel malesuada ipsum nisl vel
            velit. Nulla facilisi.
          </p>
          <p>
            Our restaurant is located in the heart of the city and offers a wide
            range of dishes to satisfy your taste buds. From appetizers to
            desserts, we have something for everyone.
          </p>
          <p>
            We use only the freshest ingredients in our dishes and our chefs are
            passionate about creating delicious and visually appealing meals.
            Our friendly staff will make sure that you have a memorable dining
            experience.
          </p>
          <p>Come and visit us today and taste the difference!</p>
        </section>
      </main>
    </>
  );
};

export default Home;

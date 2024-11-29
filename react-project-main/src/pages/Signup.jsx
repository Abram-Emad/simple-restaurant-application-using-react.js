import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
  };

  const validate = () => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    for (const detail of error.details) {
      validationErrors[detail.path[0]] = detail.message;
    }
    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors || {});
    if (validationErrors) return;

    try {
      const { data: users } = await axios.get("http://localhost:3000/users");
      const userExists = users.some(
        (user) => user.username.toLowerCase() === data.username.toLowerCase()
      );

      if (userExists) {
        setSignupError("Username already exists. Please choose another one.");
        return;
      }

      await axios.post("http://localhost:3000/users", data);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error during signup:", error);
      setSignupError("An unexpected error occurred. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        {signupError && <div className="alert alert-danger">{signupError}</div>}
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

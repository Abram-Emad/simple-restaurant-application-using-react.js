import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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
      const user = users.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      if (user) {
        navigate("/", { replace: true });
      } else {
        setLoginError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoginError("An error occurred. Please try again later.");
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
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onChange={handleChange}
            value={data.username}
            type="text"
            className="form-control"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            type="password"
            className="form-control"
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        {loginError && <div className="alert alert-danger">{loginError}</div>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

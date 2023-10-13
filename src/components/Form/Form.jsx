import React, { useState } from "react";
import validation from "../../validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    const userValidated = validation(userData);

    setErrors(userValidated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={userData.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        value={userData.password}
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;

/* eslint-disable react/prop-types */
import { useState } from "react";
import validation from "../../validation";

import backgroundImage from "./background.jpg";
import styles from "./Form.module.css";

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
    <div className={styles.container}>
      <div className={styles.imgBackground}>
        <img
          src={backgroundImage}
          alt="Background"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              prueba@email.com
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Write your Email..."
              className={styles.input}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <label htmlFor="password" className={styles.label}>
              Prueba123
            </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
              name="password"
              placeholder="Write your password..."
              className={styles.input}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

/* eslint-disable react/prop-types */
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ onSearch, logout, getRandomCharacter }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.navContainer}>
      <NavLink to="./home">Home</NavLink>
      <NavLink to="./about">About</NavLink>
      <NavLink to="./favorites">Favorites</NavLink>
      <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
      <button onClick={handleLogout} className={styles.logoutButton}>
        Log out
      </button>
    </div>
  );
};

export default Nav;

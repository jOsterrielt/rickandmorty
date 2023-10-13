import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <SearchBar onSearch={onSearch} />
      <button
        type="submit"
        onClick={() => {
          logout();
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Nav;

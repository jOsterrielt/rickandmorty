/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch, getRandomCharacter }) => {
  const [id, setId] = useState(0);

  const handleChange = (evento) => {
    let id = evento.target.value;
    setId(id);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        className={styles.searchInput}
        onChange={handleChange}
        value={id}
      />
      <button onClick={() => onSearch(id)} className={styles.addButton}>
        Add
      </button>
      <button
        onClick={() => {
          getRandomCharacter();
        }}
        className={styles.addRandomButton}
      >
        Add Random
      </button>
    </div>
  );
};

export default SearchBar;

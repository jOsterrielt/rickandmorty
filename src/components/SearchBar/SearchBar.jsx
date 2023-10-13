import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    setId(value);
  }

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)} value={id}>
        Agregar
      </button>
    </div>
  );
}

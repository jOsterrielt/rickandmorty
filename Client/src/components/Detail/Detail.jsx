import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          //console.log(data);
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailsContainer}>
      {character.image && (
        <div className={styles.detailsImage}>
          <img src={character.image} alt={character.name} />
        </div>
      )}
      <div className={styles.detailsInfo}>
        {character.name && <h2>{character.name}</h2>}
        {character.status && <p>Status: {character.status}</p>}
        {character.species && <p>Species: {character.species}</p>}
        {character.gender && <p>Gender: {character.gender}</p>}
        {character.origin?.name && <p>Origin: {character.origin.name}</p>}
      </div>
    </div>
  );
};

export default Detail;

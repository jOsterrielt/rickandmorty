/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, handleClose }) {
  return (
    <div className={styles.cardsContainer}>
      {characters?.map((character) => (
        <Card
          onClose={() => handleClose(character.id)}
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </div>
  );
}

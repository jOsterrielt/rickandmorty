import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters?.map((character) => (
        <Card
          onClose={() => onClose(character.id)}
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

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

import styles from "./Card.module.css";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites?.forEach((favorite) => {
      if (favorite.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else if (!isFav) {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite} className={styles.favoriteButton}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={styles.favoriteButtonFav}>
            🤍
          </button>
        )}
        <button onClick={() => onClose()} className={styles.xButton}>
          X
        </button>
      </div>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <h2 className={styles.name}>{name}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin?.name}</h2>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}

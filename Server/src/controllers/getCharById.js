const axios = require("axios");

const API_KEY = "jOsterrielt";
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const charId = req.params.id;
    const { data } = await axios(`${URL}/${charId}`);
    const { id, status, name, species, gender, location, origin, image } = data;
    const character = {
      id,
      status,
      name,
      species,
      gender,
      location,
      origin,
      image,
    };

    !character
      ? res.status(404).send("Character not found")
      : res.json(character);
  } catch (error) {
    console.error("Internal server error: ", error);
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;

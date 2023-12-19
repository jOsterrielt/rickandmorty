const favoriteModel = require("../models/Favorite");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ error: "Faltan datos" });
    }

    const [newFavorite, created] = await favoriteModel.findOrCreate({
      where: {
        name,
        origin,
        status,
        species,
        image,
        gender,
      },
    });

    const allFavorites = await favoriteModel.findAll();
    res.json(allFavorites);
  } catch (error) {
    res.status(500).send("Error al crear el usuario", error.message);
    console.error(error);
  }
};

module.exports = postFav;

const favoriteModel = require("../models/Favorite");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Falta el parametro id" });
    }

    await favoriteModel.destroy({ where: { id } });

    const allFavorites = favoriteModel.findAll();

    res.json(allFavorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = deleteFav;

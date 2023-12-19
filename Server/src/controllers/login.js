const userModel = require("../models/User");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const foundUser = await userModel.findOne({ where: { email } });

    if (!foundUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (foundUser.password !== password) {
      return res.status(403).json({ error: "Contraseña incorrecta" });
    }

    res.json({ access: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = login;

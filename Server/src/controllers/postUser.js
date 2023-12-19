const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Faltan datos" });
    } else {
      const newUser = await User.create({ email, password });
      res.json(newUser);
    }
  } catch (error) {
    res.status(500).send(error.message);
    console.error(error);
  }
};

module.exports = postUser;

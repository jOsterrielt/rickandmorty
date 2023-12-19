const { conn } = require("./DB_connection");
const server = require("./app");

const PORT = 3001;

server.listen(PORT, async () => {
  try {
    await conn.sync({ force: true });
    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error(error.message);
  }
});

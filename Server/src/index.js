const server = require("./app");

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

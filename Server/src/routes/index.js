const router = require("express").Router();
const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

router.get("/login", login);
router.post("/login", postUser);
router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

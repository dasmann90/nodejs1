const express = require("express");
const router = express.Router();
const { register, login,deleteAll } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);
router.delete("/del",deleteAll);

module.exports = router;

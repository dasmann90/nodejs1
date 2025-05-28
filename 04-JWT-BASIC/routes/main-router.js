const express = require("express");
const router = express.Router();
const {logIn,dashBoard} = require("../controller/main-controller");

router.route('/login').get(logIn);
router.route('/dashboard').get(dashBoard)



module.exports = router;
const express = require("express");
const router = express.Router();
const {logIn,dashBoard} = require("../controller/main-controller");
const authMiddleWare = require('../middlewares/auth')

router.route('/login').post(logIn);
router.route('/dashboard').get(authMiddleWare,dashBoard)



module.exports = router;
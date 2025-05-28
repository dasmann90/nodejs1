const router = require("express").Router();
const UserSchema = require("../models/User")

router.post("/",(req,res)=>{
    res.send("Test is sucessfull !!")
})


module.exports = router;
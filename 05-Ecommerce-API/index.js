require("dotenv").config();
const express = require("express");
const app = express();



const start = async ()=>{
    try {
       app.listen(4000,()=>{
        console.log(`App is runing port 4000`)
       }) 
    } catch (error) {
        console.log(error)
    }
}

start();
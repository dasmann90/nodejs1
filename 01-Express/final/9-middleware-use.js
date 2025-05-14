const express = require('express');
const app = express();
const {logger,authorize} = require('./middleware/logger');

// req=> middleware => res
app.use([logger,authorize]);

app.get('/',(req,res)=>{
    console.log(req.user)
    res.send('Home page');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.listen(5000)
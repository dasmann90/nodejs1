const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const authRoter = require('./routes/auth')
//static asssts
app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({extended:false}));
// parse json
app.use(express.json())
app.use('/api/people',peopleRouter);
app.use('/login',authRoter);



app.listen(5000)
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Home Page")
})

app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})

app.all('/*name', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})

//app.get
//app.post
//app.put
//app.all
//app.use
//app.listen
//app.delete

// syntex has been chnaged with all() method in express version 5 or above
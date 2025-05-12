const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
// get all products 
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((x)=>{
        const {id,name,image} = x;
        return {id,name,image};
    })
    res.json(newProducts);
})

// get product by id

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((x)=> x.id === Number(productID));
    if(!singleProduct){
      return  res.status(404).send('Product not found !')
    }

   return res.json(singleProduct)
})

// query prams

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    
    let sortedProduct = [...products];

    if(search){
        sortedProduct = sortedProduct.filter((x)=>{
           return x.name.startsWith(search);
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit));
    }
    if(sortedProduct.length < 1){
        res.status(200).json({sucess:true,data:[]})
    }


   return res.status(200).json({sucess:true,data:sortedProduct})
})

app.listen(5000,()=>{
    console.log('server is runing on port 5000...')
})
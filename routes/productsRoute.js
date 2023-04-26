const express = require('express');
const router = express.Router();
const Product = require('../models/product');

const {isLoggedIn} = require('../middleware')

// getting all products



router.get('/products',async(req,res)=>{

    try{
        const products = await Product.find({});

        res.json(products)
    }
    catch(e){
        console.log("Error in getting Products")
    }
   
})

// Creating New Product

router.post('/products',isLoggedIn,async(req,res)=>{

   console.log(req.body)
    const newProduct =await Product.create(req.body);
    
    res.json(newProduct);
})

// Showing Particular Product

router.get('/products/:id',isLoggedIn,async(req,res)=>{
    const product = await Product.findById(req.params.id).populate('reviews');
    res.json(product);
})

// editing particular product

router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{

   const product= await Product.findById(req.params.id);

    res.json(product)
})

// updating product

router.patch('/products/:id',isLoggedIn,async(req,res)=>{


 
    const product = await Product.findByIdAndUpdate(req.params.id,req.body);

    res.json(product);
})

// deleting a product

router.delete('/products/:id',isLoggedIn,async(req,res)=>{

     await Product.findByIdAndDelete(req.params.id);

    res.json("product deleted");
})

router.post('/products/:searchValue',async(req,res)=>{
    console.log(req.params.searchValue)

   
    try {
       await Product.createIndexes()
    const product = await Product.find({$text:{$search:req.params.searchValue}})
        res.json(product);
    } catch (error) {
        console.log("Error in getting Products", error)
    }
  
})



module.exports = router;
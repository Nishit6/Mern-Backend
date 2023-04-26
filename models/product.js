const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    quantity:{
        type:Number,
        // required:true,
        trim:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    }



})


productSchema.index({ name: 'text', description: 'text' });
const Product = mongoose.model('Product',productSchema);


module.exports = Product;
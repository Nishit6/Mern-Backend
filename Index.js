const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const seedDB = require('./seed')
const path = require('path')
const cors = require('cors')


// routes
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productsRoute')

// configuring mongoose

mongoose.connect(process.env.MONGO_CLOUD, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,

  
})
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))


app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(authRoutes);
app.use(productRoutes);

app.get('/',(req,res)=>{
res.redirect('/products')
})

app.get('*',(req,res)=>{
    res.redirect('/products')
})
    


//seedDB()


app.listen(8080,()=>{
    console.log("Server Started At Port 8080");
})

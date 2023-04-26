const mongoose = require('mongoose');
const Product = require('./models/product');

const products =[

    {
        name:"Ear Buds",
        img:"https://images.unsplash.com/photo-1631807112242-a382472b15c1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"Quantum SonoTrix X True Wireless Earbuds TWS, 6 Hours Playback 42 Hours with Charging Case, Bluetooth 5.0, IPX5 Sweatproof.",
        price:"1800",
        quantity: 12
     },

     {
        name:" Apple AirTag 4 Pack",
        img:"https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFwcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"So Basically the air tag is not a Solution for finding items which are beyond the range or perimeter of air tag and iphone.",
        price:"10000",
        quantity: 120
     },

     {
    name:"Camera",
    img:"https://images.unsplash.com/photo-1628163463242-e80f84ef0bc2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NXxKOXlyUGFIWFJRWXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:"Logitech Pebble M350 Wireless Mouse with Bluetooth or USB - Silent, Slim Computer Mouse with Quiet Click for Laptop, Notebook.",
    price:"1795",
    quantity: 22
     },

    {
    name:"Bluetooth Speaker",
    img:"https://images.unsplash.com/photo-1632095682995-0fbc45f553cc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:"Infinity Fuze 100 by Harman (JBL, HK, Infinity), Wireless Portable Bluetooth Speaker with Mic, Deep Bass, Dual Equalizer.",
    price:"3500",
    quantity: 5
    },

    {
    name:"Watch",
    img:"https://images.unsplash.com/photo-1631729597135-7ddae16fb35c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:"Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker.",
    price:"2379",
    quantity: 85
    },

    {
    name:"Headphones",
    img:"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:"Sony WI-C200 Wireless Headphones with 15 Hrs Battery Life, Quick Charge, Magnetic Earbuds for Tangle Free Carrying, BT ver 5.0,Work from home.",
    price:"1220",
    quantity: 44
    },
    
]

async function seedDB(){

    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;
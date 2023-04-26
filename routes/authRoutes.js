const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {verifyJWT} = require('../verifyJWT')


router.get('/isUserAuth', verifyJWT , (req, res) => {
    res.json({ auth:true ,message: "User authenticated!"})
})

router.post('/register', async (req, res) => {
    
    try {

        const { email, password, passwordVerify,username } = req.body;
         console.log(req.body);
    

        // Validation 

        if (!email || !password || !passwordVerify || !username) {
        
            return res.status(400).json({ errorMessage: "Please enter all the required credentials" })
            
        }

        if (password.length < 4) {
            
            return res.status(400).json({ errorMessage: "Please enter password of atleast 4 characters" });
        }

        if (password !== passwordVerify) {
         
            return res.json({ message: "Passwords not match" });
        }

        const existingUser = await User.findOne({ email })
        
        if (existingUser) {
            console.log("4")
            return res.json({ message: "User with this email is already registered" });
        }

        // hash the password

        const salt = await bcrypt.genSalt();

        const passwordHash = await bcrypt.hash(password, salt);
        console.log("Hash",passwordHash)
       
        // save the new user account to the database

        const newUser = new User({
            email,
            passwordHash,
            username
        });

        const savedUser = await newUser.save();
            console.log(savedUser)
        res.json(savedUser);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Register Error")
    }
});


// login the existing user

router.post('/login', async(req, res) => {
    
    try {

        const { email, password } = req.body;
        console.log(req.body)

        // Validation

        if (!email || !password) {
            return res.status(400).json({ errorMessage: "Please enter all the required credentials" })
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.json({  message: "Wrong email or password" });
        }

        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash
        );

        if (!passwordCorrect) {
            return res.json({ message: "Wrong password" });
        }

        // sign the token

        const token = jwt.sign(
            {
                user:existingUser._id
            },
            process.env.JWT_SECRET,{
                expiresIn : process.env.JWT_EXPIRES
            }
        )

      

       
       
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite:"none",
            expiresIn: new Date().setTime(new Date().getTime() + process.env.COOKIE_EXPIRES * 3600 * 1000)
        })

      
        res.json({auth: true, token: token, result: existingUser});
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Login Error")
    }
  
})


router.get('/logout', (req, res) => {
    
    res.cookie("token","", {
        httpOnly: true,
        expires:new Date(0),
        secure: true,
        sameSite:"none"
    })


    res.status(200).send("Logged Out SuccessFully");
    console.log("logged out")
})



module.exports = router; 
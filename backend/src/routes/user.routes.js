const express = require("express")
const User = require("../models/user.js")

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, dateOfBirth } = req.body;

    if(!name || !email || !dateOfBirth) {
        return res.status(400).json({ message: "All Fields are required"})
    }

    try {
        const user = await User.create({name, email, dateOfBirth});
        res.status(201).json({ message: "User saved", user});
    } catch(error) {
        console.error("Create User Error:", error)
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exist"})
        }

    res.status(500).json({ 
        message: "server error",
        error: error.message 
    })
             
    };
});

module.exports = router
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userEmail: String,
    password: String
})


const userModel = mongoose.model("users", userSchema)
const { default: mongoose } = require("mongoose");

const registerUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String
})


const userModel = mongoose.model("regiesterusers", registerUserSchema)

module.exports = userModel;
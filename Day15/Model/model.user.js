const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    otp: String,
    otpExpires:String

});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
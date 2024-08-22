// step 1
const mongoose = require("mongoose");

// step 3 define schema
const userSchema = new mongoose.Schema({
    poets: String,
    books: String,
    awards: String,
    price: Number,
    image: String

})


// step2  model
const userModel = mongoose.model("kaviUser", userSchema)


// step 4 export the modeule

module.exports = userModel;

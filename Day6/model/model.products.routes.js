const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productname: String,
    price: Number,

})


const userModel = mongoose.model("products", productSchema);

module.exports = userModel;
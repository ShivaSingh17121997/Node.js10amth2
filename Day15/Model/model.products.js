const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productname: String,
    price: Number,
    rating: Number,
    category: String,
    quantity: String,
    discription: String,
})


const userModel = mongoose.model("products", productSchema)
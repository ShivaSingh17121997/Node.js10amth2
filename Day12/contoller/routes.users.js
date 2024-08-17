// step1 require express
const express = require("express");
const users = require("../model/model.users")  // schema aa gaya

// 2 create userRoute
const userRoute = express.Router();

// create routes end with api end point and crud operation

//3 add data in mondodb ,create

userRoute.post("/addData", async (req, res) => {

    const { poets, books, awards, price } = req.body;

    const addedData = new users({ poets, books, awards, price })
    await addedData.save()

    console.log(addedData)

    res.send(addedData)
    // smsr


})



module.exports = userRoute;
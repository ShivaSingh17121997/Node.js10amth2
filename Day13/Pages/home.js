const express = require("express");

pageRoutes = express.Router();
const jwt = require('jsonwebtoken');

pageRoutes.get("/", (req, res) => {
    res.end("this is home page")
})

// private route ==> if(token)=> {user has access to the page} else {user is not authorized}

pageRoutes.get("/about",  (req, res) => {
    let token = req.headers.authorization.split(" ")[1]
    console.log("token came to about patge", token)

    // veryfy the token
    try {
        jwt.verify(token, "nodejs", function (err, decoded) {
            if (decoded) {
                res.json({ msg: " welcome to the about page" })
            } else if (err) {
                res.status(404).json({ msg: "Login first" })
            }

        })

    } catch (error) {
        res.status(400).json({ msg: "you are not authorized" })

    }
})





pageRoutes.get("/contact", (req, res) => {




    res.end("Hello this is contact page")


})

module.exports = pageRoutes;
// framework is predefined structure
// MVC model
// M = model  
// V = view   // ejs
// C = controller  //



const express = require("express");

const app = express();
const ejs = require("ejs")

const port = 9000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contacts")
})

app.get("/about", (req, res) => {
    res.render("About")
})



app.listen(port, (error) => {
    console.log("server is running on port", port)
})











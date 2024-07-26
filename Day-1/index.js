const express = require("express");
const app = express();
const port = 9000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    return res.render('index')
})


app.get("/home", (req, res) => {
    res.render("home")
})


app.get("/contact", (req, res) => {
    res.render("contact")
})

app.listen(port, (error) => {
    try {
        console.log("app is running at", port)

    } catch (error) {
        console.log(error, 'something is wrong')
    }
})

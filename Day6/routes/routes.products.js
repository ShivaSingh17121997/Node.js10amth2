const express = require("express");

const Router = express.Router();

Router.post("/create", (req, res) => {
    try {
        const { email, pass } = req.body;
        // Your logic here (e.g., validate, save to the database, etc.)

        // Simulate successful response
        res.json({ message: "Data received", email, pass });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An internal server error occurred." });
    }

})


Router.get("/show", async () => {

    const data = await userModel.find()
    console.log(data)
    res.send(data)


})





Router.get("/", (req, res) => {
    res.render("contacts")
})

Router.get("/about", (req, res) => {
    res.render("About")
})

Router.get("/contact", (req, res) => {
    res.render("index")
})

module.exports = Router;
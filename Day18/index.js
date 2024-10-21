const express = require("express");
require("dotenv").config();

const path = require("path");// step 1;

const app = express()

// middleware
app.use(express.json())
app.use(express.static("public"));
app.use(express.static("utils"));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(process.env.PORT, () => {
    console.log("server is running at port", process.env.PORT);
})


// require path
//  route res.sendFile(path.join(__dirname, "index.html"))
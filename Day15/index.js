



// setup server

const express = require("express");
const app = express();
const ejs = require("ejs");


const port = 8900;

// middleware
app.use(express);
app.use(express.json());
app.set("view engine", "ejs");

const connection = require("./Connection/db");

app.get("")




app.listen(port, async () => {
    try {
        await connection;
        console.log("server is running at port : ", port)
    } catch (error) {
        console.log(error)
    }
})
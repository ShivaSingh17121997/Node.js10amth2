// app.use(express.json())
const express = require("express");
const app = express();
const { connection } = require("./Connection/db")
const usersRoutes = require("./Controller/routes.user")
app.use(express.json());

app.use("/users", usersRoutes)
const port = 8989;

app.get("/", (req, res) => {
    res.end("hello nikhil bhai")
})


app.listen(port, async (req, res, err) => {
    await connection;
    console.log("server is running at port", port)
})



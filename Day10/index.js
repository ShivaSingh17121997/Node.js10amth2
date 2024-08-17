const express = require("express")
const app = express();

const connect = require("./Connection/db")

const port = 9800;

app.get("/", (req, res) => {
    res.end("whatsapp bro")
})

// step 1 create server
// import conncet from database

app.listen(port, async (req, res, err) => {
    await connect;
    console.log("database is connected to the server")
    if (err) {
        console.log("something is wrong")
        return
    }

    console.log("server is running at port'", port)
})
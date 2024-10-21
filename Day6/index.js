
const express = require("express");
const app = express();
const ejs = require("ejs")
const connection = require("./connection/db");
const P_route = require("./routes/routes.products");

const port = 9000;

// middleware
app.use(express.json());
app.set("view engine", "ejs")


app.use("/productRoute", P_route);

app.listen(port, async () => {
    await connection;

    console.log("server is running on port", port)
})

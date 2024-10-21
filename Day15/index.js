const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash")
const connection = require("./Connection/db");
const p_Route = require("./routes/routes.product")
const authRoute = require("./routes/routes.auth");

const port = 8990;


// middleware
app.use(express.json());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(flash());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));


app.use(cookieParser());
app.use("/authRoute", authRoute);
app.use("/prodRoute", p_Route);

app.listen(port, async () => {
    try {
        await connection;
        console.log("server is running at port : ", port)
    } catch (error) {
        console.log(error)
    }
})

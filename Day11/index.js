// app.use(express.json())
const express = require("express");
const app = express();
const { connection } = require("./Connection/db")
const usersRoutes = require("./Controller/routes.user")
var flash = require('connect-flash');
app.use(express.json());


app.use(session({
    secret: 'your-secret-key', // Change this to a secure secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true if using HTTPS in production
}));


app.use("/users", usersRoutes)
const port = 8989;


app.get('/flash', function (req, res) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
});

app.get('/', function (req, res) {
    // Get an array of flash messages by passing the key to req.flash()
    res.render('index', { messages: req.flash('info') });
});

app.listen(port, async (req, res, err) => {
    await connection;
    console.log("server is running at port", port)
})



const express = require("express");
const flash = require('connect-flash');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

let port = 9900;
const app = express();

// Set up middleware
app.use(cookieParser('keyboard cat'));

app.use(session({
    secret: 'your-secret-key', // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600 } // 1 minute
}));

// middleware
app.use(flash());

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Route for setting a flash message
app.get('/flash', function (req, res) {
    req.flash('info', 'Flash is back!');
    res.redirect('/');
});

// Route for rendering the home page ejs
app.get('/', function (req, res) {
    res.render('index', { messages: req.flash('info') }); // Render index.ejs with flash messages
});

// Start the server
app.listen(port, () => {
    console.log("Server is running at port", port);
});

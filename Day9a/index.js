const express = require('express');

const app = express();

app.set("view engine", "ejs")

const port = 8000;

// database 

// middleware is functin

const checkpost = (req, res, next) => {  // next()
    console.log(req.query.age)
    if (req.query.age >= 18) {
        return next();
    }
    return res.redirect('/')
}



app.get("/", (req, res) => {
    console.log(req.query.age)
    return res.end("hello bro")
})

app.get("/home", checkpost, (req, res) => {
    res.render("home")
})


app.use(checkpost)
app.listen(port, (err) => {
    if (err) {
        console.log("something is wrong")

    }
    console.log("server is running at por", port);
})
const express = require("express")
const app = express();

const User = require("./Model/model.student")

const ejs = require("ejs")
app.set('view engine', 'ejs')
    ;
app.use(express.urlencoded({ extended: false }))

const connect = require("./Connection/db")
const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
app.use(express.urlencoded({ extended: false }))


app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())



// authUser = async (username, password, done) => {
//     //Search the user, password in the DB to authenticate the user
//     //Let's assume that a search within your DB returned the username and password match for "Kyle".
//     let user = await userModel.findOne({ username: username })
//     if (!user) {
//         return done(null, false)
//     }

//     if (user.password != password) {
//         return done(null, false)
//     }

//     return done(null, user);


// }


// passport.use(new LocalStrategy(authUser))


// passport.serializeUser((user, done) => {
//     console.log(`--------> Serialize User`)
//     console.log(user)

//     done(null, user.id)

// })

// passport.deserializeUser(async (id, done) => {
//     console.log("---------> Deserialize Id")
//     console.log(id)
//     let user = await userModel.findById(id);
//     return done(null, user)
// })

// // app.get("/", (req, res) => {
// //     res.render("login.ejs")

// // })


passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));


app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        console.log(req.body)
      res.redirect('/');
    });





app.get("/dashboard", (req, res) => {
    res.render("dashboard.ejs", { name: req.user.name })
})



const port = 9800;



// step 1 create server
// import conncet from database

app.listen(port, async (req, res, err) => {
    await connect
    console.log("database is connected to the server")
    if (err) {
        console.log("something is wrong")
        return
    }
    console.log("server is running at port'", port)
})
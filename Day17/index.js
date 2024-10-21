const express = require("express");
const app = express();
const connection = require("./connection/db")
const port = 8000;

const passport = require("passport");
const session = require("express-session");

const LocalStrategy = require('passport-local')
const userModel = require("./modal/modal.auth")


// app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(
    new LocalStrategy(async (username, password, done) => {
        console.log(username, password, "auth")
        try {
            const user = await userModel.findOne({ username })
            if (!user) {
                return done(null, false, { message: "incorrect username" })
            }
            if (user.password != password) {
                return done(null, false, { message: "incorrect password" })
            }

            return done(null, user);

        } catch (error) {
            return done(err)
        }
    })
)
// serilize  ==> store the user into session like sessionStorage.setItem()
// deserilize  ==> to get the data form session // like local storage.getItem

passport.serializeUser((user, done) => {
    done(null, user.id) // store the userid into session
})

// deserializeUser is use to get the data from sesssion;
passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findOne({ id });
        done(null, user)

    } catch (error) {
        done(null, false)
    }

})













// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await userModel.findById(id);
//         done(null, user)

//     } catch (error) {
//         done(err, null)
//     }
// })

const auth = require("./Routes/routes.auth")
app.use("/auth", auth);









app.listen(port, async () => {
    try {
        await connection;
        console.log("db is connected")
        console.log("server is running at port", port);
    } catch (error) {
        console.log(error);
    }
})


